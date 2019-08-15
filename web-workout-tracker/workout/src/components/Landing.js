import React from 'react'
import axios from 'axios'

class Landing extends React.Component {

    state= {
    }
    
    componentDidMount(){
        axios.get("https://workouttrackerprod.herokuapp.com/")
            .then(res => {
                this.setState( res.data)
            })
            .catch(err =>{
                console.log(err)
            })
    }

    render(){
        return (
            <>
            {this.state.api}
            </>
        )
    }
}

export default Landing