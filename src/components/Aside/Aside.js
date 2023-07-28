import React, {useState, useEffect} from 'react';
import './Aside.css';

function Aside () {

    const userUrl = 'https://5d8e0901370f02001405c7c9.mockapi.io/api/v1/postblog/users';
    const [users, setUsers] = useState([]);

    const getUsers = ( url ) => {
        fetch( url )
        .then( response => response.json() )
        .then((data) => {
            setUsers(data);
        })
    }

    useEffect( () => {
        getUsers( userUrl );
    }, [] );

    return(
        <div className='Aside' >
            { users.map( (user) =>{            
                return (
                    <div className="user" key={user.id} >
                        <img src={ user.avatar }  className="image" />
                        <div className='name' >
                            <div className="user_fullname" >{ user.name }</div>
                            <hr className="aside-line" ></hr>
                        </div>
                    </div>
                )
            } ) }
        </div>
    )
}

export default Aside;