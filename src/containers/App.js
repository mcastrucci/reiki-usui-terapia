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
import ReactGA from 'react-ga';
import {Helmet} from "react-helmet";


class App extends Component {
  constructor(){
    super();
    this.state={
      route: 'home',
      loaded: false
    }
  }

  componentDidMount() {
    document.title = "Reiki-usui-terapia";
    window.scrollTo(0, 0);
    ReactGA.event({
      category: 'screen changes',
      action: this.state.route
    });
  }
  

  onRouteChange = (route) =>{
    this.setState ({route: route});
    window.scrollTo(0, 0);
  }

  render() {
    const route = this.state.route;
    return (
      <div className="App">
      <Helmet>
          <meta charSet="utf-8" />
          <html lang="es"/>
          <title>Reiki Usui Terapia - Reiki en capital Federal</title>
          <link rel="canonical" href="http://www.reikiusuiterapia.com/home" />
          <meta name="description" content="Reiki en Capital federal, boedo. Terapia, informacion y mucho mas! ¿Que es el Reiki? ¿Que le hace el Reiki a nuestro Cuerpo?, ¿Como puede el Reiki Ayudarme?, ¿Que son los chakras?" />
      </Helmet>
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
          <SocialMedias onRouteChange={this.onRouteChange}/>
        </div>
      }
      </div>
    );
  }
}

export default App;
