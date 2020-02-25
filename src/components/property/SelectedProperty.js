import React, { Component  } from 'react';
import axios from 'axios';

class SelectedProperty extends Component {


  state = {
    property: null
  }

    componentDidMount(){
        // console.log(this.props);
        let id = this.props.match.params._id;
        axios.get('/properties/' + id)
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
        <h3>{property.price}</h3>
    </div>
    </div>
) : (
    <div className="center">Loading...</div>
)

        return(
            <div className="container">
                {selectedproperty}
  
                <div className="card">
        <h3 className="center">
            On Show
        </h3>
        <hr></hr>
        <label>Weekdays, 11:00 - 17:00</label>
        <label>Weekends, 11:00 - 17:00</label>
        <label>Holidays, 11:00 - 17:00</label>
    </div>
    <br></br>
    <br></br>

            </div>
        );
    }
}

export default SelectedProperty; 