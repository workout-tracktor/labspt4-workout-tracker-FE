import React from 'react'
// import { useAuth0 } from "../react-auth0-wrapper"

// import SECTION from './style'

class UserSettings extends React.Component {
    state = {

    }
    update_field = e => this.setState({[e.target.id]: e.target.value})
    render = () =>
        <section class='user-settings'>
            <h1>...Loading</h1>
        </section>
}

export default UserSettings