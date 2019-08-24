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
            <div className='ideal-body-type'>
                <span className='title'>Ideal Body Type</span>
                {this.state.body_types.map((type, idx) => (
                    <div className='type' key={idx}>
                        <img src={`/img/${type.src}`} alt={type.name} />
                        <span>{type.name}</span>
                    </div>
                ))}
            </div>
            <div className='units-of-measurment'>
                <span className='title'>Units of Measurment</span>
                <div className='unit-types'>
                    <input type='radio' name='unit-type' value='us' id='us'></input>
                    <label htmlFor='us'>US Standard</label>
                </div>
                <div className='unit-types'>
                    <input type='radio' name='unit-type' value='metric' id='metric' defaultChecked></input>
                    <label htmlFor='metric'>Metric</label>
                </div>
            </div>
        </SECTION>
}

export default UserSettings