import React, { Component } from 'react';
import AllProperties from '../layout/AllProperties';
import Agencies from '../layout/Agencies';
import FeedBack from '../layout/FeedBack';
import ContactUs from '../layout/ContactUs';

class Dashboard extends Component{
    render(){
        
        return(
            <div className="hero-container">
            {/* introduction section  */}
            <div className="fade"></div>
            <section id="intro-text">
                <div id="overlay"></div>
                <div>
                <h2>Buy, Rent and Sell properties</h2>
                <p>In South Africa our homes are deeply rooted in our communities from Ouma Marie selling vetkoek out her window to Malume Steve and he's mechanics in the backyard,
                many unique individuals coming together in our very own masal spice of culture and traditions , braai vleis to seven colours, let us find your community.
                </p>
                </div>
                
              </section>

             {/* how it works section  */}
             <section id="how-it-works">
                 <h2>How It Works</h2>
                 <div className="flex">
                <div>
                    <span className="fas fa-home"></span>
                    <h4>Search for Property.</h4>
                    <p>Lorem ipsum dolor sit amet consectectur adipisicing elit.</p>
                </div>

                <div>
                    <span className="fas fa-dollar-sign"></span>
                    <h4>Buy/Rent Property.</h4>
                    <p>Lorem ipsum dolor sit amet consectectur adipisicing elit.</p>
                </div>

                <div>
                    <span className="fas fa-bell"></span>
                    <h4>Recieve Alerts</h4>
                    <p>Lorem ipsum dolor sit amet consectectur adipisicing elit.</p>
                </div>
            </div>
             </section>

            {/* picture gallery of properties and descriptions */}
             <section id="properties">
               <AllProperties />
             </section>

             {/* agency logos */}
             <section id="agencies-section">
             <h2>Agencies</h2>
            <p className="large-paragraph">Property24 has a large array of acredited real estate agencies advertising the best possible listings available for you all on our platform for the best property finding experience.</p>
             <Agencies />
             </section>

           {/* feedback gallery  */}
             <section id="feedback-section">
                 <FeedBack />
             </section>

             {/* contact us from */}
             <section id="contact-us-section">
                 <ContactUs />
             </section>
             

            </div>
        );
    }

}
export default Dashboard;