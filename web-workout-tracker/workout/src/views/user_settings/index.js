import React from 'react'
// import { useAuth0 } from "../react-auth0-wrapper"

import SECTION from './style'

class UserSettings extends React.Component {
    state = {
        first_name: 'Gordon',
        last_name: 'Clark',
        body_types: [{name: 'Slenderman', src: '1.png'},
                        {name: 'Boringman', src: '2.png'},
                        {name: 'Incredibly Big Man', src: '3.png'},
                    ]
    }
    componentDidUpdate = () => {}
    update_field = e => {
        console.log(e.target.value)
        this.setState({[e.target.id]: e.target.value})
    }
    render = () =>
        <SECTION className='user-settings'>
            <div id='first-name'>
                <span className='title'>First Name</span>
                <div className='value'>
                    <input type='text' id='first_name' value={this.state.first_name} onChange={this.update_field} />
                </div>
            </div>
            <div id='last-name'>
                <span className='title'>First Name</span>
                <div className='value'>
                    <input type='text' id='last_name' value={this.state.last_name} onChange={this.update_field} />
                </div>
            </div>
            <div id='ideal-body-type'>
                <span className='title'>Ideal Body Type</span>
                <div className='value'>
                    {this.state.body_types.map((type, idx) => (
                        <div className='type' key={idx}>
                            <img src={`/img/${type.src}`} alt={type.name} />
                            <span>{type.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div id='units-of-measurment'>
                <span className='title'>Units of Measurment</span>
                <div className='value'>
                    <div className='unit-types'>
                        <input type='radio' name='unit-type' value='us' id='us'></input>
                        <label htmlFor='us'>US Standard</label>
                    </div>
                    <div className='unit-types'>
                        <input type='radio' name='unit-type' value='metric' id='metric' defaultChecked></input>
                        <label htmlFor='metric'>Metric</label>
                    </div>
                </div>
            </div>
        </SECTION>
}

export default UserSettings