import React from 'react'
import {View, Text} from 'react-native'
import {Card, CardSection, Input, Button, Spinner} from './common'

class LoginForm extends React.Component {

    state = {
        email: '',
        password: '',
        loading: false
    }
    onEmailChange(text) {
        this.setState({email: text})
    }
    
    onPasswordChange(text){
        this.setState({password: text})
    }

    onButtonPress() {

        this.setState({loading: true})
        //Destructures code
        const {email, password} = this.state;
        console.log(`loggin ${email} in`)
        this.setState({email: '', password: '', loading: false})
        // Next step is to send to the backend for auth creation
        // this.props.loginUser({email, password})
    }

    renderButton(){
        if(this.state.loading) {
            return <Spinner size = "large" />
        }
        return (
            <Button onPress = {this.onButtonPress.bind(this)}>Login</Button>
        )
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                        label = "Email"
                        placeholder = "email@gmail.com"
                        onChangeText = {this.onEmailChange.bind(this)}
                        value = {this.state.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label = "Password"
                        placeholder = "password"
                        onChangeText = {this.onPasswordChange.bind(this)}
                        value = {this.state.value}
                    />  
                </CardSection>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}

export default LoginForm