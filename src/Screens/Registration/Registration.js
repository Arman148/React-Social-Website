import React, {Component} from 'react';
import './Registration.css';
import Field from '../../components/RegField/Field'

class Registration extends Component {

    render() {
        return(
            <div className="Registration" >
                <Field></Field>
            </div>
        )
    }
}

export default Registration;