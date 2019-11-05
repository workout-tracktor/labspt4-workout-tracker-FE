import React from "react";
import axios from "axios";
import styled from "styled-components";
import Calendar from "react-calendar";
import "../Calendar.css";
import Workouts from "./Workouts";
import {connect} from "react-redux";

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
            sets: [],
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
        axios.get(`https://workouttrackerstaging-2.herokuapp.com/api/exercises?user_id=${user_id}`)
            .then(res => {
                this.setState({exercises: res.data})
            })
            .catch(err => console.log(err))
    }

    onChange = date => {
        const dateSelected = this.get_date(date)
        //filter through exercise state by date
        this.state.exercises.filter(exercise => {
            if (exercise.date === dateSelected && exercise.id) {
                axios.get(`https://workouttrackerstaging-2.herokuapp.com/api/sets?exercise_id=${exercise.id}`)
                    .then(res => this.setState({sets:res.data}))
                    .catch(err => console.log(err))
            }
            else this.setState({sets:[]})

        })
    }


    render() {
        return (
            <Container>
                {this.state.isLoggedin ?
                    <>
                        <Calendar onChange={this.onChange} value={this.state.date}/>
                        <Workouts workouts = {this.state.exercises} sets = {this.state.sets}/>
                    </>
                    : null}
            </Container>
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
export default connect(mapStateToProps, {})(Landing);