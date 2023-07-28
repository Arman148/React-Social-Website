import React, { useState, useEffect} from 'react'
import './Workspace.css';

function Work () {

    const [state, setState] = useState({
        lastname: "",
        username: "",
        email: "",
        loginned: true,
    });

    const [isOpen, setOpen] = useState({
        form: "closed",
        create_or_close: "Create new Post!!!"
    })

    const [postForm, setForm] = useState({
            title: "",
            description: "",
    })

    let [count, setCount] = useState(0)
    
    useEffect( () => {
        console.log('done');
        const User = JSON.parse(localStorage.User_id);
        const UserId = User.userId;
        fetch(`https://it-blog-posts.herokuapp.com/api/people/${UserId}`)
        .then( (response) => response.json())
        .then( (data) =>{
            setState({
                lastname: data.name,
                username: data.user,
                email: data.email
            })
        } );
    }, [] )

    const createBtn = () => {
        if(isOpen.form == "closed") {
            setOpen({
                form: "opened",
                create_or_close: "close the form"
            })            
        }
        else {
            setOpen({
                form: "closed",
                create_or_close: "Create new Post!!!"
            })
        }
    }

    
    const getInput = (e, inputName) => { 
        postForm[`${inputName}`] = e.target.value;
    };
    
    const createData = () => {
        
    }
    
    const forConsoleLog = () => {
        
    }


    return(
        <div className="Workspace" >
            <div className="side" >
                    <div className="user-name" >                        
                        <h2 className="name lastname" >{state.lastname}</h2>
                        <h2 className="name username" >{state.username}</h2>-
                        <p className="email" >{state.email}</p>
                    </div>

                    
                    <div className="create-post" > 
                        <button onClick={createBtn} >{isOpen.create_or_close}</button>
                    </div>

                    {isOpen.form == "opened" ?
                     <div className="form_for_create_post" >
                        <input name="title" placeholder="Title" type="text" onChange={e => { getInput(e, "title") }} ></input>
                        <input className="description" name="description" placeholder="Description" type="text" onChange={e => { getInput(e, "description") }} ></input>
                        <button className="field-btn" onClick={createData} > Log in </button>
                     </div>
                      : null }
                </div>

                <h1>Your posts will be there</h1>
                <button onClick={forConsoleLog} >click to console</button>>
        </div>
    )
}

export default Work;


/*
componentWillMount(){
    const User = JSON.parse(localStorage.User_id);
    const UserId = User.userId;
    fetch(`https://it-blog-posts.herokuapp.com/api/people/${UserId}`)
    .then( (response) => response.json())
    .then( (data) =>{
        console.log(data)
        setState({
            lastname: data.name,
            username: data.user,
            email: data.email
        })
    } );
}

*/