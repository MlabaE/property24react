import React from 'react';
import { MDBIcon, MDBBtn } from 'mdbreact';

const SocialMedia = () =>{

  const handleClick = (e) =>{
    e.preventDefault();
  }

    return(
        <div className="social-container ">
      
           
            <div className="fb">
            <MDBBtn size="lg" tag="a" floating social="fb" id="scBtn1" style={{ height: "50px",width: "50px", padding: "1em", }}  onClick={handleClick}>
           <MDBIcon fab icon="facebook-f" />
           </MDBBtn>
            </div>
            <div className="google">
            <MDBBtn size="lg" tag="a" floating social="gplus" id="scBtn2" style={{ height: "50px",width: "50px", padding: "1em"}} onClick={handleClick}>
            <MDBIcon fab icon="google-plus-g" />
           </MDBBtn>
            </div>
           

     </div>
    );
}

export default SocialMedia;