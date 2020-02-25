import React, { Component } from 'react';
import axios from 'axios';
import { MDBMask, MDBView } from 'mdbreact';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


class PropertyListings extends Component{

    state = {
        properties: [ ]
    }

  componentDidMount(){
      axios.get('/properties')
      .then(res =>{
          console.log(res);
          this.setState({
              properties: res.data
          })
      })
  }

    render(){

   const { properties } = this.state;
   
   const propertiesList = properties.length ? (
       properties.map(post =>{
           return(

                <div className="all-properties" key={post.id}>
                <MDBView hover>
               <Link to={'/'+ post.id}>
               <img src={post.image} alt="property"/>
               </Link>
               <MDBMask className="flex-center" overlay="white-light">
               <Link to={'/'+ post.id}>
               <Button variant="outline-dark" >view</Button>
               </Link>
              </MDBMask>
               </MDBView>
                    <div className="property-details">
                    <Link to={'/'+ post.id}>
                         <p className="price">{post.price}</p>
                         <span className="beds">{post.bedrooms}</span>
                         <span className="baths"></span>
                         <address>
                         {post.address}
                         </address>
                         </Link>
                     </div>
                     
                 </div>
           )
       })
   ) : (
       <div className="center">Oops no listings yet</div>
   )

        return(
            <div className="all-properties-container">
                <h2>Properties</h2>
                <br></br>
                {propertiesList}
            </div>
        );
    }
}

// const PropertyListings = () =>{
//     return(

//          <div className="all-properties-container">
//             <h2>Properties</h2>

//            <div className="all-properties">
//            <img src={require("../layout/images/luxury1.jpg")} alt="property"/>
//                     <div className="property-details">
//                         <p className="price">R3,400,000</p>
//                         <span className="beds">6 beds</span>
//                         <span className="baths">4 baths</span>
//                         <address>
//                             98 steenbok ave, roodekop, Gauteng
//                         </address>
//                     </div>
//                 </div>

//                 <div className="all-properties">
//            <img src={require("../layout/images/luxury2.jpg")} alt="property"/>
//                     <div className="property-details">
//                         <p className="price">R3,400,000</p>
//                         <span className="beds">6 beds</span>
//                         <span className="baths">4 baths</span>
//                         <address>
//                             98 steenbok ave, roodekop, Gauteng
//                         </address>
//                     </div>
//                 </div>

//                 <div className="all-properties">
//            <img src={require("../layout/images/luxury3.jpg")} alt="property"/>
//                     <div className="property-details">
//                         <p className="price">R3,400,000</p>
//                         <span className="beds">6 beds</span>
//                         <span className="baths">4 baths</span>
//                         <address>
//                             98 steenbok ave, roodekop, Gauteng
//                         </address>
//                     </div>
//                 </div>

//                 <div className="all-properties">
//            <img src={require("../layout/images/luxury4.jpg")} alt="property"/>
//                     <div className="property-details">
//                         <p className="price">R3,400,000</p>
//                         <span className="beds">6 beds</span>
//                         <span className="baths">4 baths</span>
//                         <address>
//                             98 steenbok ave, roodekop, Gauteng
//                         </address>
//                     </div>
//                 </div>
//         </div>

//     );

// }

export default PropertyListings;

