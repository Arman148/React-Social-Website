import React, { Component} from 'react'
import './Workspace.css';

/*https://it-blog-posts.herokuapp.com/api/people*/


class Workspace extends Component {
    constructor(props){
        super(props);
        this.state = {
            lastname: "",
            username: "",
            email: "",
            loginned: true,
            form: "closed",
            create_or_close: "Create new Post!!!!",
            form_inputs: {
                title: "",
                description: "",
            },
        }
    }

    componentWillMount() {
        const User = JSON.parse(localStorage.User_id);
        const UserId = User.userId;
        fetch(`https://it-blog-posts.herokuapp.com/api/people/${UserId}`)
        .then( (response) => response.json())
        .then( (data) =>{
            console.log(data)
            this.setState({
                lastname: data.name,
                username: data.user,
                email: data.email
            })
        } );
    }

    create_button = () => {
        if(this.state.form == "closed") {
            this.setState({
                form: "opened",
                create_or_close: "close the form"
            })
            
        }
        else {
            this.setState({
                form: "closed",
                create_or_close: "create new Post!!!"
            })
        }
    }

    getInput = (e, inputName) => { 
        this.state.form_inputs[`${inputName}`] = e.target.value;
        };

    createData = () => {
        console.log(JSON.parse(localStorage.getItem("Posts")).posts)
       /* JSON.parse.(localStorage.getItem("Posts")).posts.push("asd")*/
    }
    
    seeLocalStorage = () => {
        console.log(JSON.parse(localStorage.getItem("Posts")).posts);
    }

    render(){
        return(
            <div className="Workspace" >
                <div className="side" >
                    <div className="user-name" >                        
                        <h2 className="name lastname" >{this.state.lastname}</h2>
                        <h2 className="name username" >{this.state.username}</h2>-
                        <p className="email" >{this.state.email}</p>
                    </div>

                    
                    <div className="create-post" > 
                        <button onClick={this.create_button} >{this.state.create_or_close}</button>
                    </div>

                    {this.state.form == "opened" ?
                     <div className="form_for_create_post" >
                        <input name="title" placeholder="Title" type="text" onChange={e => { this.getInput(e, "title"); }} ></input>
                        <input className="description" name="description" placeholder="Description" type="text" onChange={e => { this.getInput(e, "description"); }} ></input>
                        <button className="field-btn" onClick={this.createData} > Log in </button>
                     </div>
                      : null }
                </div>

                <h1>Your posts will be there</h1>
                <button onClick={this.seeLocalStorage} >65734</button>
            </div>
        )
    }
}

export default Workspace;