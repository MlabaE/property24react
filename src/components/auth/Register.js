import React, { Component } from 'react';
import SocialMedia from '../layout/SocialMedia';
import Form from 'react-bootstrap/Form';
import axios from 'axios';


class Register extends Component {
  constructor(props){
      super(props);

    //   base state
  this.state = { 

    email:'',
    password:'',
    firstname:'',
    lastname:''
  
  }
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChange = this.handleChange.bind(this);
}

//   event handler for taking in and updating state
  handleChange = (e) =>{
     this.setState({
         [e.target.id]: e.target.value
     })
  }

  //   event handler for submition

  handleSubmit = (e) =>{
    e.preventDefault();
    console.log(this.state);
    const {
        firstname,
        lastname,
        email,
        password
    } = this.state;

    // call the api
    axios.post('/auth/signup',{
       user:{
           firstname: firstname,
           lastname : lastname,
           email: email,
           password:password
       } 
    },{
     withCredentials: true } //make sure user is logg
     ).then(response => {
         console.log("register res",response);
           
     })
     .catch(error => {
         console.log("register error",error);
     });
 }

    render() {
        return (
            <div className="container"  style={{width:"500px"}}>
                {/* form to caputure user registration details */}
                <form onSubmit={this.handleSubmit} className="white" id="form">
                    <h2>Register</h2>
                    <br></br>
                     {/* input for firstname */}
                     <div className="input-field">
                     <Form.Label>Firstname</Form.Label>
                     <Form.Control type="text" name="firstname" onChange={this.handleChange}/>
                    </div>
                     {/* input for lastname */}
                     <div className="input-field">
                     <Form.Label>Lastname</Form.Label>
                    <Form.Control type="text" name="lastname" onChange={this.handleChange}/>
                    </div>
                    {/* input for email */}
                    <div className="input-field">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" onChange={this.handleChange} required/>
                    <Form.Text className="text-muted">
                     We'll never share your email with anyone else.
                    </Form.Text>
                    </div>
                    {/* input for password */}
                    <div className="input-field">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" onChange={this.handleChange} required/>
                    </div>
                    {/* check box */}
                    <div className="input-field">
                    <Form.Check type="checkbox" label="Accept Terms and Condistions" />
                    </div>
                    <div className="input-field">
                        <button className="btn z-depth-0" style={{background:"#1976D2" , color:"white"}}>Register</button>
                    </div>
                </form>
                <br></br>
                <hr></hr>
                <h4 style={{textAlign:"center"}}>or login with:</h4>
                <br></br>
                {/* call social media login component */}
                <SocialMedia />
                <br></br>
            </div>
        )
    }
}

export default Register;
