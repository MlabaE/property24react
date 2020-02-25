import React, { Component } from 'react';
import SocialMedia from '../layout/SocialMedia';
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Alert from 'react-bootstrap/Alert';
// import FormControl from 'react-bootstrap/FormControl';
import 'react-bootstrap/FormCheck';
import axios from 'axios';

class Login extends Component {

    constructor(props) {
        super(props);

       this.state = {
        email:'',
        password:'',
        loginerrors: ''
  }
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChange = this.handleChange.bind(this);
}

// event handler
  handleChange = (e) =>{
     this.setState({
         [e.target.name]: e.target.value
     })
  }

//   event handler
  handleSubmit = (e) =>{
    e.preventDefault();
    console.log(this.state);
    const {
        email,
        password
    } = this.state;

    // call the api
    axios.post('/auth/login',{
       user:{
           email: email,
           password:password
       } 
    },{
     withCredentials: true } //make sure user is logg
     ).then(response => {
         console.log("login res",response);
     })
     .catch(error => {
         console.log("login error",error);
     });
 }
 

    render() {

        return (
            <div className="container" style={{width:"500px"}}>
                {/* form to caputure user login details */}
                <form onSubmit={this.handleSubmit} id="form">
                    <h2>Login</h2>
                    <br></br>
                    {/* input for email */}
                    <div className="input-field">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" onChange={this.handleChange} />
                    <Form.Text className="text-muted">
                     We'll never share your email with anyone else.
                    </Form.Text>
                    </div>
                    {/* input for password */}
                    <div className="input-field">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onChange={this.handleChange}/>
                    </div>
                    {/* check box */}
                    <Form.Check type="checkbox" label="Stay signed in" />
                    <a href="/" className="forgot-password" style={{color:"#1976D2"}}>Forgot password?</a>
                    <div className="input-field">
                    <button className="btn z-depth-0" style={{background:"#1976D2" , color:"white"}}>Login</button>
                    </div>
                </form>
                <br></br>
                <hr></hr>
                <h4 style={{textAlign:"center"}}>or signin with:</h4>
                <br></br>
                {/* call social media login */}
                <SocialMedia />
                <br></br>
                <br></br>
                <br></br>
                </div>
        )
    }
}

export default Login;
