import React from 'react'
import {View, Text} from 'react-native'
import axios from 'axios'

class BackendAPI extends React.Component {

    state = {

    }

    componentDidMount(){
        axios.get("https://workouttrackerprod.herokuapp.com/")
            .then(res => {
                console.log('hi')
                this.setState( res.data)
            })
            .catch(err =>{
                console.log(err)
            })
            
    }

    render(){
        return (
            <View>
                <Text> {this.state.api} </Text>
            </View>
        )
    }
}

export default BackendAPI