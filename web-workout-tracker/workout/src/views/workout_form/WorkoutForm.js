import React from "react";
import WorkoutTypeForm from './WorkoutTypeForm'
import WorkoutInputForm from "./WorkoutInputForm";
import {connect} from 'react-redux'
import {addWorkoutToState} from "../../actions";

class WorkoutForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            workoutType: ""
        }
    }


    setWorkoutType = (workoutType) => {
        this.setState({workoutType: workoutType})
    };

    addWorkoutToState = (workout) => {
        this.props.addWorkoutToState(workout)
    };


    render() {
        return (
            <div className="input-workout-form">
                {this.state.workoutType === "" ? (
                    <WorkoutTypeForm setWorkoutType={this.setWorkoutType}/>
                ) : (
                    <WorkoutInputForm
                        workoutType={this.state.workoutType}
                        setWorkoutType={this.setWorkoutType}
                        addWorkoutToState={this.addWorkoutToState}
                    />
                )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        workoutData: state.workoutData
    }
};


export default connect(mapStateToProps, {addWorkoutToState})(WorkoutForm);
