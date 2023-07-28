import React, { Component } from 'react'
import './Navigation.css';
import AppContext from '../Context/Context';
import Home from '../Home/Home';
import Registration from '../../Screens/Registration/Registration' ;
import Login from '../../Screens/Login/Login';
import Workspace from '../../Screens/Workspace/Workspace'


class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
          bar: "HOME",
          loggined: false,
          userId: ""
        };
      }
      componentWillMount() {
        if (localStorage.User_id !== undefined) {
          this.setState({
            bar: "",
            loggined: true
          });
        }
      }
      ToWork = () => {
        this.setState({
          bar: "",
          loggined: true
        });
      };

      Logout = () => {
        this.setState({
          bar: "HOME",
          loggined: false,
        })
      }

      ToAbout = () => {
        this.setState({ bar: "ABOUT" });
      };

      ToLogin = () => {
        this.setState({ bar: "LOGIN" });
      };

      ToReg = () => {
        this.setState({ bar: "REGIS" });
      };

      ToHome = () => {
        this.setState({ bar: "HOME" });
      };

      GetUserId = id => {
        this.setState({ userId: id });
      };
      render() {
        return (
          <AppContext.Provider  value={{GetUserId: this.GetUserId}} >
              <div className="Navigation" >
                <header>            
                    <button className="header-btn left" onClick={this.ToHome} >Home</button>
                    {!this.state.loggined ? <button className="header-btn" onClick={this.ToLogin} >Log in</button> : null }
                    {this.state.loggined ? <button className="header-btn" onClick={this.Logout} >Log out</button> : null } 
                    {!this.state.loggined ? <button className="header-btn right" onClick={this.ToReg} >Registration</button> : null}
                    {this.state.loggined ? <button className="header-btn right" onClick={this.ToWork} >Workspace</button> : null}
                </header>
                {this.state.bar === "HOME" ? <Home /> : null}
                {this.state.bar === "LOGIN" ? <Login ToWork={this.ToWork} /> : null}
                {this.state.bar === "REGIS" ? <Registration onLogin={this.ToLogin} /> : null}
                {this.state.bar === "" && this.state.loggined ? <Workspace /> : null}
               </div>
          </AppContext.Provider>
        );
      }
}

export default Navigation;

/*
        constructor(props){
            super(props);
            this.state = {
                bar: "ABOUT",
                loggined: false,
                userId: ""
            }
        }
        
        ToWork () {
            this.setState({
                bar: "",
                loggined: true,
            })
        }
        
        ToHome () {
            this.setState({
                bar: "HOME"
            })
        }
        
        ToLogin () {
            this.setState({
                bar: "Home"
            })
        }
        
        ToReg () {
            this.setState({
                bar: "REG"
            })
        }
        
        GetUserId (idValue) {
            this.setState({ userId: idValue });
          };
        
        
        render() {
            return (
                <AppContext.Provider value={{getUserId: this.getUserId}} >
                    <div className="Navigation" >
                        <header>            
                            <button onClick={this.ToLogin} >Login</button>
                            <button onClick={this.ToReg}  className="registration" >Registration</button>
                        </header>
                    </div>
                </AppContext.Provider>
            )
        }*/