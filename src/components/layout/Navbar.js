import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
    return (
        
        <nav className="nav-wrapper blue darken-2">

          
          <div className="header-container" id="nav-menu">

           {/* hamburger menu */}
          <button id="nav-toggle" class="hamburger-menu" style={{padding:"15px",height:"5em",width:"4em"}}>
                        <span class="strip"></span>
                        <span class="strip"></span>
                        <span class="strip"></span>
                    </button>
              
              <Link to='/'className="brand-logo">property24</Link>
              <SignedInLinks />
               <SignedOutLinks />
                
            </div>

            
        </nav>
    )
}

export default Navbar;