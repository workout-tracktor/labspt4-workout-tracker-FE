import React from "react";
import axios from "axios";
import styled from "styled-components";
import Calendar from "react-calendar";
import "../Calendar.css";
import Workouts from "./Workouts";
import {connect} from "react-redux";
import CheckoutForm from "../../components/CheckoutForm";
import SuggestedWorkouts from "../../components/SuggestedWorkouts";

class Landing extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            //when date is clicked on,
            workouts: true,
            //selectedDate is the date that is selected on the calendar
            //which will then be sent to back end to check to see if there was workout data
            selectedDate: null,
            isLoggedin: false,
            user_id: "",
            exercises: [],
            todaysExercises: [],
            didCalendarChange: false,
            reRender: false
        };
    }

    get_date = (dateObject) => {
        const date = dateObject
        const year = date.getFullYear()
        const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
        const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
        return `${year}-${month}-${day}`
    }

    componentDidMount() {
        //checks to see if user is logged in by checking cookie to render components
        if (document.cookie.indexOf('auth0.is.authenticated') !== -1) {
            this.setState({isLoggedin: !this.state.isLoggedin})
        } else {
            this.setState({isLoggedin: false})

        }

        const user_id = localStorage.getItem('user_id');
        axios.get(`https://workouttrackerprod.herokuapp.com/api/exercises?user_id=${user_id}`)
            .then(res => {
              console.log(res.data)
                this.setState({exercises: res.data})
                let today = new Date()
                this.onChange(today)
               
            })
            .catch(err => console.log(err))
    }
    
    newStateWhoDis = updatedExercises => {
      this.setState({todaysExercises: updatedExercises})

    }

    onChange = date => {
        const dateSelected = this.get_date(date)
        //filter through exercise state by date
        
          let todaysExercises =  this.state.exercises.filter(exercise => {
          if (exercise.date === dateSelected && exercise.id) {
            return exercise
          }
        })
        let sets = []
        if(todaysExercises.length !== 0){
        todaysExercises.map(exercise => {

                axios.get(`https://workouttrackerprod.herokuapp.com/api/sets?exercise_id=${exercise.id}`)
                    .then(res => {
                        let exercise = [...todaysExercises]
                        sets.push(...res.data)
                        let convertedObject = []
                        for(let i=0;i<exercise.length; i++) {
                            //convertedObject[i]['sets'] = []
                            convertedObject.push(exercise[i])
                            convertedObject[i]['sets'] = []
                            for(let j=0;j<sets.length;j++) {
                                if(exercise[i].id === sets[j]['exercise_id']) {
                                    convertedObject[i]['sets'].push(sets[j])
                                    // console.log(exercise[i].id)
                                    // console.log(sets[j]['exercise_id'])
                                }
                            }
                       this.setState({todaysExercises: convertedObject})
                      }
                      


                    })
                    .catch(err => console.log(err))
        })
        
      } else {
        this.setState({todaysExercises: []})
      }
    }

    ester(){
      let newStuff = []
      this.state.todaysExercises.map(object => {
        newStuff.push(object)
      })
      return newStuff
    }

    render() {
        return (
          <>
            <Container>
                {this.state.isLoggedin ?
                  
                    <>
                        <Col1>
                          <Calendar onChange={this.onChange} value={this.state.date} />
                          <CheckoutForm />
                        </Col1>
                        <Workouts reRender = {this.state.reRender} workouts = {this.ester()} newStateWhoDis = {this.newStateWhoDis} />
                    </>
                    : null
                }
            </Container>
           </>
        );
    }
}

const mapStateToProps = state => ({
    thisUser: state.thisUser
});

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 40px 0;
  @media (max-width: 1040px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const CheckoutDiv = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;
const Col1 = styled.div`
  display: flex;
  flex-direction: column;
`;
export default connect(
  mapStateToProps,
  {}
)(Landing);
