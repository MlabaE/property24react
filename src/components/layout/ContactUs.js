import React from 'react';

const ContactUs = () =>{
    return(

        <div className="container">
            <h2>Contact Us</h2>

            <div className="flex">
                <div id="form-container">
                    <h3>Contact Us</h3>
                    {/* form to input data */}
                    <form>
                        <label htmlFor="name">Name</label>
                        <input type="text" />

                        <label htmlFor="email">Email</label>
                        <input type="email"  />

                        <label htmlFor="subject">Subject</label>
                        <input type="text" />

                        <label htmlFor="message">Message</label>
                        <textarea ></textarea>

                        <button className="rounded">Send Message</button>
                    </form>
                </div>
            
            {/* details about compnay */}
                <div id="address-container">
                    <label>Address</label>
                    <address>
                    Great Westerford, 240 Main Road, Rondebosch, Cape Town, South Africa 
                    </address>

                    <label>Postal Address</label>
                    <a href="/">P.O. Box 234, Newlands, Cape Town, 7725, South Africa</a>

                    <label>Phone</label>
                    <a href="/">+27 (0)861 111 724</a>     
                </div>
            </div>
        </div>

    );
}

export default ContactUs;