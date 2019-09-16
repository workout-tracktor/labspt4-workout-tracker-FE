import React from "react";
import WorkoutTypeForm from './WorkoutTypeForm'
import WorkoutInputForm from "./WorkoutInputForm";

class WorkoutForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            workoutType: "",
            name: "",
            date:{},
            data: [],
        }
    }

    setWorkoutType = (workoutType) => {
        this.setState({workoutType: workoutType})
    };

    setData = (arr) => {
        this.setState({data: arr})
    };

    changeDate = (date) => {
        this.setState({date: date})
    };
    changeName = (name) => {
        this.setState({name: name})
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
                        changeDate={this.changeDate}
                        changeName={this.changeName}
                    />
                )}

                <p>{this.state.name}</p>
                {console.log(this.state.date)}

                {this.state.data.map((exercise, idx) => {
                    return (
                        <div>
                            Weight: <div>{exercise[`weight${idx}`]}</div>
                            Unit: <div>{exercise[`unit${idx}`]}</div>
                            Reps: <div>{exercise[`rep${idx}`]}</div>
                        </div>

                    )
                })}
            </div>
        )
    }

}

export default WorkoutForm;
