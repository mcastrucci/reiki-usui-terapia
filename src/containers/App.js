import React, { Component } from 'react';
import './App.css';
import Header from '../components/header/Header';
import SocialMedias from '../components/Social/SocialMedias';
import Nav from '../components/nav/Nav';
import Footer from '../components/footer/Footer';
import Reiki from '../components/body/reiki/Reiki';
import Home from '../components/body/home/Home';
import Chakras from '../components/body/chakras/Chakras';
import About from '../components/body/about/About';
import Contact from '../components/body/contact/Contact';
import Location from '../components/body/location/Location';
import Terapy from '../components/body/terapy/Terapy';


class App extends Component {
  constructor(){
    super();
    this.state={
      route: 'home'
    }
  }

  onRouteChange = (route) =>{
    this.setState ({route: route});
  }

  render() {
    const route = this.state.route;
    return (
      <div className="App">
      {(route === 'home')?
        <Home onRouteChange={this.onRouteChange}/>
      :
        <div>
          <Nav onRouteChange={this.onRouteChange}/>
          <div className="app_boddy">
            <Header route={route}/>
            {(route === 'home') ?
              <Home/>
              :(route === 'reiki') ?
              <Reiki/>
              :(route === 'chakras') ?
              <Chakras/>
              :(route === 'about')?
              <About/>
              :(route === 'contact')?
              <Contact/>
              :(route === 'location')?
              <Location/>
              :(route === 'terapy')?
              <Terapy/>
              :<div></div>
            }
            <Footer/>
          </div>
          <SocialMedias/>
        </div>
      }
      </div>
    );
  }
}

export default App;
