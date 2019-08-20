import React from 'react'
// import axios from 'axios'

// import style from './style'

class Landing extends React.Component {
    state = {
        username: '',
        password: ''
    }
    componentDidMount = () => {}

    update_state = e => {}
    render = () => 
        <section class='login'>
            <input type='text' id='username' onChange={this.update_state} placeholder='username' />
            <input type='password' id='password' onChange={this.update_state} placeholder='password' />
            <button class='submit'>LOG ME IN!!!!</button>
        </section>
}

export default Landing