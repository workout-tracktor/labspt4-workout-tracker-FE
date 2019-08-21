import React from 'react'
// import { useAuth0 } from "../react-auth0-wrapper"

// import SECTION from './style'

class UserSettings extends React.Component {
    state = {
        username: '',
        first_name: '',
        last_name: '',
        avatar_src: '',
        fitness_goals: '',
        personal_stats: '',
    }
    componentDidUpdate = () => {}
    update_field = e => this.setState({[e.target.id]: e.target.value})
    render = () =>
        <section className='user-settings'>
            <h1>...Loading</h1>
            <img src='./#' alt='temp'/>
            <span>Username:</span>
            <input type='text' id='username' onChange={this.update_field} placeholder='username'/>
            <span>First Name:</span>
            <input type='text' id='first-name' onChange={this.update_field} placeholder='first name'/>
            <span>Last Name:</span>
            <input type='text' id='last-name' onChange={this.update_field} placeholder='last name'/>
            <span>Body Type:</span>
            <span>value</span>
            <span>Goal Type:</span>
            <span>Radio/Pulldown/Select Image</span>
            <span>Joined:</span>
            <span>Date / Time (uneditable)</span>
            <span>Stats:</span>
            <span>...list of personal body and workout stats</span>
        </section>
}

export default UserSettings