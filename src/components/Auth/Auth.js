import axios from 'axios';
import React, { Component }from 'react';
import { Link } from 'react-router-dom';

export default class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            usernameInput:'',
            passwordInput:'',
            error: '',
            loggedIn: ''
        }
        this.handleInput = this.handleInput.bind(this)  
        this.login = this.login.bind(this)
    }

registerUser(){
    const {usernameInput, passwordInput} = this.state
    axios.post('/api/register', {usernameInput: usernameInput.toLowerCase(), passwordInput: passwordInput.toLowerCase()}).then((res) => {
       console.log('frontregisterUserhitting')
       this.setState({
           loggedIn: 'Login Succesful', error: ''
       })
    })
}

login() {
    const {usernameInput, passwordInput} = this.state
    if(usernameInput && passwordInput) {
        axios.post('./api/login', {usernameInput: usernameInput.toLowerCase(),
        passwordInput: passwordInput
        }).then(res => {
            console.log(res.data)
            if(res.data.length !== 0) {
                this.setState({ error: res.data })
            } else {
                this.setState({loggedIn: 'Login Succesful', error: ''})
            }
        })
    } else {
        this.setState({error: 'Please fill in both fields'})
    }
}

handleInput(e) {
    this.setState({
        value: e.target.value
    })
}

    render (){
        console.log(this.state)
        return (
            <div>
                Auth
                <br />
                <h1>Helo</h1>
                <div>
                    Username: <input name='usernameInput' value={this.state.usernameInput} onChange={(e) => this.setState({ usernameInput: e.target.value})} />
                </div> 
                <div>
                    Password: <input name='passwordInput' value={this.state.passwordInput} onChange={(e) => this.setState({ passwordInput: e.target.value})} />
                </div> 
                <br />
                <Link to='/dashboard'> <button >Login</button> </Link>
                <Link to='/dashboard'> <button onClick={() => {this.registerUser}}>Register</button> </Link>
                
            </div> 
        )
    }
}