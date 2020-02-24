import React from 'react';

const Footer = () =>{
    return(
       
       <footer className="footer row">


           <div id="footer-left">
                <h5>Quick Links</h5>
                <ul>
                    <li><a href="/">Login</a></li>
                    <li><a href="/">Signup</a></li>
                    <li><a href="/">Alerts</a></li>
                    <li><a href="/">Contact Us</a></li>
                </ul>
           </div>

              <div id="footer-right">
                <h5 className="follow-us">Follow Us</h5>
                <ul>
                    <li><a href="/"><span className="fab fa-facebook-f"></span></a></li>
                    <li><a href="/"><span className="fab fa-twitter"></span></a></li>
                    <li><a href="/"><span className="fab fa-instagram"></span></a></li>
                    <li><a href="/"><span className="fab fa-linkedin-in"></span></a></li>
                </ul>
              </div>

          
       </footer>
    );
}

export default Footer;