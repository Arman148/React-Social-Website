import React, { Component } from 'react'
import './Login.css';

class Login extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          password: "",
          email: "",
          poster: {
              email: "",
              password: "",
          }
        };
      }

      getInput = (e, inputName) => {
        this.setState({ [`${inputName}`]: e.target.value, });        
        this.state.poster[`${inputName}`] = e.target.value;
        };
    
    toLogin =() => {
        
        const post = (user, url) => {
          fetch(url, {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
              "content-type": "application/json"
            }
          })
            .then(response => {
              if(response.status === 200 || response.status === 201){
                  return response.json()
              }
            })
            .then(data => {
                if(data !== undefined) {
                    localStorage.setItem(
                        "User_id",
                        JSON.stringify({
                            id: data.id,
                            userId: data.userId
                        })
                    )
                    localStorage.setItem(
                      "Posts",
                      JSON.stringify({
                        posts: [],
                      })  
                    )
                    this.props.ToWork();
                }
                else {
                    alert('Please check email and password')
                }
            })

            fetch("https://it-blog-posts.herokuapp.com/api/people/login")
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => {console.log("Login -> post -> error", error)} )
        };

        post(this.state.poster, "https://it-blog-posts.herokuapp.com/api/people/login" )


      }

    render() {
        return(
            <div className="Login" >
                <div className="field" >
                    <input name="email" placeholder="Email" type="email" onChange={e => { this.getInput(e, "email"); }} ></input>
                    <input name="password" placeholder="Password" type="password" onChange={e => { this.getInput(e, "password"); }} ></input>
                    <button className="field-btn" onClick={this.toLogin} > Log in </button>
                </div>
            </div>
        )
    }
}

export default Login;