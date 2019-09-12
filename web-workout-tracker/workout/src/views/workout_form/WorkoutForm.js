import React, {useState} from "react";
import DatePicker from "../DatePicker";
import WorkoutTypeForm from './WorkoutTypeForm'
import WorkoutInputForm from "./WorkoutInputForm";

class WorkoutForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            workoutType: "",
            data: [],
        }
    }

    setWorkoutType = (workoutType) => {
        this.setState({workoutType: workoutType})
    };

    setData = (data) => {
        let newData = [...this.state.data, data]
        this.setState({data: newData})
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
                        setData={this.setData}
                        data={this.state.data}
                    />
                )}
            </div>
        )
    }

}

export default WorkoutForm;
