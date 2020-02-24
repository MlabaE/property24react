import React from 'react';

const FeedBack = () =>{

    
    return(
            <div className="testimonial-container">
            <h2>Customer Feedback</h2>
            <div id="testimonials-slider">


                <div id="mySlides">
                    <blockquote>
                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nostrum vitae explicabo dolore ratione. Quia iure quod ipsa blanditiis sint nulla a nam veritatis ex eos. Dicta molestiae dolorum laudantium."</p>
                    </blockquote>
                    <div className="testimonials-caption">
                        <img src="https://images.pexels.com/photos/2102332/pexels-photo-2102332.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Client 3" />
                        <p>Frank Smith</p>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default FeedBack;