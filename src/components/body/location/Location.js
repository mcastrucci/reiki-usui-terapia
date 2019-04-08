import React, { Component } from 'react';
import './Location.css';
import map from './map.JPG'


class Location extends Component {
    componentDidMount(){
        const script = document.createElement("script");

        script.src = "https://www.powr.io/powr.js?platform=html";
        script.async = true;

        document.body.appendChild(script);
    }

    render(){
        return(
            <div className="location">
                <h2>Atendemos En Boedo!</h2>
                {//
                //<div className="powr-map" id='944d3fb4_1554382533'></div>
                }
                <img src={map} alt="location"></img>
            </div>   
        );
    }
}

export default Location;