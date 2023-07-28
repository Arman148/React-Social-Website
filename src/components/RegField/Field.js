import React, { useState} from 'react'
import './Field.css';

function Field () {

    const [name, setName] = useState('')
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const createData = () => {
        return{
            name: name,
            user: user,
            email: email,
            password: password
        }
    }

    function post(url, data) {
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response => {
            return response.json
        })
        .catch(error => console.log('error:', error))
    }


    const reg = () => {        
        const data = createData();
        post('https://it-blog-posts.herokuapp.com/api/people', data);
    }

    return(
        <div className='Field' >
            <input name="lastname" placeholder="Lastname" type="text" onChange={event => setName(event.target.value)} ></input>
            <input name="username" placeholder="Username" type="text" onChange={event => setUser(event.target.value)} ></input>
            <input name="email" placeholder="Email" type="email" onChange={event => setEmail(event.target.value)} ></input>
            <input name="password" placeholder="Password" type="password" onChange={event => setPassword(event.target.value)} ></input>
            <button className='field-btn'  onClick={reg} >Registration</button>
        </div>
    )

}

export default Field
/*
            <input placeholder="Lastname" type="text" id="lastname" >
            <input placeholder="Username" type="text" id="username" >
            <input placeholder="Email" type="email" id="email" >
            <input placeholder="Password" type="password" id="password" >    
*/