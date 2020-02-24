import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';


class SignedOutLinks extends Component {

//   constructor(){
//     super();

//   this.state = {
//                      {id:1 , msg:'wellcome to property24..'},
//                      {id:2 , msg:'we have the best property listings for you..'},
//                      {id:3 , msg:'contact an angent today..'}
                
// }
//   }
 

render(){

 const handleClick = (e) =>{
    e.preventDefault();
 }

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Notifications</Popover.Title>
      <Popover.Content>
        <p>wellcome to property 24..</p>
        <p>we have the best listings for you..</p>
        <p>contact an agent today..</p>
      </Popover.Content>
    </Popover>
  );

  return (

    <div className="main">
    <ul className="right">
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/Properties'>Properties</NavLink></li>
      <li><NavLink to='/Register'>Register</NavLink></li>
      <li><NavLink to='/Login'>Login</NavLink></li>
      <li>
        <div>
        <OverlayTrigger trigger="hover" placement="bottom" overlay={popover}>
        <a href="/" id="Notifications" className="fas fa-bell" onClick={handleClick}>
         <span className="badge">3</span>
        </a> 
        </OverlayTrigger>
        </div>
      </li>
      <li id="close-flyout"><span className="fas fa-times"></span></li>
    </ul>
    </div>
       );
    }
}


export default SignedOutLinks;