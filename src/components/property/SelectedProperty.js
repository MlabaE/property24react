import React, { Component  } from 'react';
import axios from 'axios';
import AllProperties from '../layout/AllProperties';

class SelectedProperty extends Component {


  state = {
    property: null
  }

    componentDidMount(){
        // console.log(this.props);
        let id = this.props.match.params.property_id;
        axios.get('/properties' + id)
        .then(res => {
            this.setState({
                property: res.data
            })
            console.log(res);
        })
    }
    render(){
        const property = this.state;

const selectedproperty = this.state.property ? (
    <div className="selectedproperty">
    <img src={property.image} alt="property"/>
    <div className="card">
        <h3 className="left">{property.price}</h3>
    </div>
    <div className="card">
        <article>
        New development Launched! Upmarket aparments available!
New development launched, Phase 1 is selling fast!
DESIGNED FOR COMFORT
50 On Lever will comprise of 250 units developed over four storeys. This development consists of one and two-bedroom apartments and open-plan lounge/dining/kitchen with lovely flow onto a covered balcony.

There are 6 unit types ranging from 45 - 95m to choose from at 50 On Lever.

Starting from R665 000, all costs are including.

DESIGNED FOR INVESTMENT
Located in the lush, city-slick area of Midrand is 50 On Lever, a fantastic choice for the first-time homeowner and investor.

DESIGNED FOR LIFESTYLE
Featuring contemporary living spaces, 50 On Lever has all the components of a modern home.

The residential complex also offers a clubhouse, swimming pool, kids play area all units have a connection to the open-access fibre network.
        </article>
    </div>

    <div className="card">
        <h3 className="center">
            On Show
        </h3>
        <hr></hr>
        <label>Weekdays, 11:00 - 17:00</label>
        <label>Weekends, 11:00 - 17:00</label>
        <label>Holidays, 11:00 - 17:00</label>
    </div>

    <div className="center">
        <AllProperties />
    </div>

    </div>
) : (
    <div className="center">Loading...</div>
)

        return(
            <div className="container">
                {selectedproperty}
            </div>
        );
    }
}

export default SelectedProperty; 