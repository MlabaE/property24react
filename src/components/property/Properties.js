import React, { Component } from 'react';
import PropertyListings from './PropertyListings';


class Properties extends Component {
    render(){
        return(
             <div className="hero-container">

                 <section className="listings">
                     <PropertyListings />
                 </section>


             </div>
        );
    }
}

export default Properties;