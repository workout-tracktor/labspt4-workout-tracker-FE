import React from 'react'
// import { useAuth0 } from "../react-auth0-wrapper"

import SECTION from './style'

class UserSettings extends React.Component {
    state = {
        body_types: [{name: 'Slenderman', src: '1.png'},
                        {name: 'Boringman', src: '2.png'},
                        {name: 'Incredibly Big Man', src: '3.png'},
                    ]
    }
    componentDidUpdate = () => {}
    update_field = e => this.setState({[e.target.id]: e.target.value})
    render = () =>
        <SECTION className='user-settings'>
            <div class='ideal-body-type'>
                {this.state.body_types.map((type, idx) => (
                    <div className='type' key={idx}>
                        <img src={`/img/${type.src}`} alt={type.name} />
                        <span>{type.name}</span>
                    </div>
                ))}
            </div>
        </SECTION>
}

export default UserSettings