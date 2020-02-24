import React from 'react';


const AllProperties = () =>{

    return(


        <div className="all-properties-container">
            <h2>Properties</h2>

           <div className="all-properties">
           <img src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="property"/>
                    <div className="property-details">
                        <p className="price">R3,400,000</p>
                        <span className="beds">6 beds</span>
                        <span className="baths">4 baths</span>
                        <address>
                            98 steenbok ave, roodekop, Gauteng
                        </address>
                    </div>
                </div>

                <div className="all-properties">
           <img src="https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="property"/>
                    <div className="property-details">
                        <p className="price">R3,400,000</p>
                        <span className="beds">6 beds</span>
                        <span className="baths">4 baths</span>
                        <address>
                            98 steenbok ave, roodekop, Gauteng
                        </address>
                    </div>
                </div>

                <div className="all-properties">
           <img src="https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="property"/>
                    <div className="property-details">
                        <p className="price">R3,400,000</p>
                        <span className="beds">6 beds</span>
                        <span className="baths">4 baths</span>
                        <address>
                            98 steenbok ave, roodekop, Gauteng
                        </address>
                    </div>
                </div>

                <div className="all-properties">
           <img src="https://images.pexels.com/photos/2839754/pexels-photo-2839754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="property"/>
                    <div className="property-details">
                        <p className="price">R3,400,000</p>
                        <span className="beds">6 beds</span>
                        <span className="baths">4 baths</span>
                        <address>
                            98 steenbok ave, roodekop, Gauteng
                        </address>
                    </div>
                </div>

            <button className="rounded">View All Property Listings</button>
        </div>
    


    );

}

export default AllProperties;