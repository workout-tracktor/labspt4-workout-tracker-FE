import React from "react";
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

    uploadData = (data) => {
        let newData = [...this.state.data, data];
        this.setState({data: newData})
    };

    render() {
        return (
            <div className="input-workout-form">
                {console.log(this.state.data)}
                {this.state.workoutType === "" ? (
                    <WorkoutTypeForm setWorkoutType={this.setWorkoutType}/>
                ) : (
                    <WorkoutInputForm
                        workoutType={this.state.workoutType}
                        setWorkoutType={this.setWorkoutType}
                        uploadData={this.uploadData}
                        data={this.state.data}
                    />
                )}
            </div>
        )
    }

}

export default WorkoutForm;
