import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';


const Navbar = () => {
    return (
        
        <nav className="nav-wrapper blue darken-2">

          
          <div className="header-container" id="nav-menu">

           {/* hamburger menu */}
          <button id="nav-toggle" className="hamburger-menu" style={{padding:"15px",height:"5em",width:"4em"}}>
                        <span className="strip"></span>
                        <span className="strip"></span>
                        <span className="strip"></span>
                    </button>
              
              <Link to='/'className="brand-logo" style={{fontFamily:"arial",fontWeight:"5px",}}>Property<span style={{color:"red"}}>24</span></Link>
              <SignedInLinks />
               <SignedOutLinks />
                
            </div>

            
        </nav>
    )
}

export default Navbar;