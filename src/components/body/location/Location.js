import React, { Component } from 'react';
import './Location.css';
import map from './map.JPG'
import ReactGA from 'react-ga';
import {Helmet} from "react-helmet";


class Location extends Component {
    componentDidMount(){
        const script = document.createElement("script");

        script.src = "https://www.powr.io/powr.js?platform=html";
        script.async = true;

        document.body.appendChild(script);
        ReactGA.pageview('/location');
    }

    render(){
        return(
            <div className="location">
                <Helmet>
                    <meta charSet="utf-8" />
                    <html lang="es" amp />
                    <title>Reiki Usui Terapia - ubicacion</title>
                    <meta name="description" content="Reiki en Capital federal, Reiki en Boedo. Reiki Usui Terapia ¿donde atendemos? ¿Donde hacer Reiki?" />
                </Helmet>
                <h2 className="contact__title">Reiki en Capital</h2>
                <h3>Atendemos En Boedo!</h3>
                {//
                //<div className="powr-map" id='944d3fb4_1554382533'></div>
                }
                <div className="location__map">
                    <a href="https://goo.gl/maps/V46XFZWuyNQ2">
                        <img src={map} alt="location"></img>
                    </a>
                </div>
            </div>   
        );
    }
}

export default Location;