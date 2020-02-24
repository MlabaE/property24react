import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import AllProperties from './components/layout/AllProperties';
import Agencies from './components/layout/Agencies';
import FeedBack from './components/layout/FeedBack';
import ContactUs from './components/layout/ContactUs';
import Footer from './components/layout/Footer';
import Properties from './components/property/Properties';
import PropertyListings from './components/property/PropertyListings';
import SocialMedia from './components/layout/SocialMedia';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <div className="App">
      <Navbar />
      <Switch>
      <Route exact path='/' component={ Dashboard } />
      <Route path='/Login' component={ Login } />
      <Route path='/Register' component={ Register } />
      <Route path='/AllProperties' component={ AllProperties } />
      <Route path='/Agencies' component={ Agencies } />
      <Route path='/FeedBack' component={ FeedBack } />
      <Route path='/ContactUs' component={ ContactUs } />
      <Route path='/Properties' component={ Properties } />
      <Route path='/PropertyListings' component={ PropertyListings } />
      <Route path='/SocialMedia' component={ SocialMedia } />
      </Switch>
      <Footer />
      </div>
     </BrowserRouter>
    );
  }
}

export default App;
