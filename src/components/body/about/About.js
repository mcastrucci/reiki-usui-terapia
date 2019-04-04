import React, { Component } from 'react';
import './About.css'
import picture from './samita.jpg'
import terapia from './terapia.PNG'

class About extends Component {
    render(){
        return (
            <div className="about-me">
                <p>Hola!! Mi nombre es Samanta Castrucci
                    Soy Maestra de Reiki Usui, Reki Karuna y Tia de una niña Hermosa :)
                </p>
                <div className="about-me__explanation">
                    <img src={picture} alt="me"></img>
                    <div className="about-me__explanation__Text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit habitant pharetra, sagittis facilisi rutrum. Nulla a mi nec commodo arcu odio auctor torquent, malesuada sociis aenean volutpat elementum taciti purus interdum cursus, non mattis viverra sem inceptos nascetur potenti. Nostra cum pulvinar eget nascetur aliquet class mi praesent malesuada, felis nisl iaculis purus ac erat interdum orci, dignissim sed enim eu libero parturient diam congue.

Pharetra elementum dis praesent curabitur vivamus suscipit cras erat, laoreet lectus malesuada porttitor dictum cursus tincidunt, primis rhoncus interdum class proin a iaculis. Tempus himenaeos fusce tristique proin arcu dignissim, enim vestibulum accumsan ullamcorper blandit fermentum porta, litora consequat faucibus pellentesque ad. Est curabitur mus pretium fusce torquent nostra conubia, lacus malesuada tristique justo morbi semper turpis, netus venenatis vel himenaeos id nec. Sociis parturient enim sollicitudin porttitor leo velit ullamcorper erat vivamus eleifend purus lacus, cursus condimentum ligula tempor consequat dictum feugiat a nascetur platea dignissim.</p>
                    </div>
                </div>

                <div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit habitant pharetra, sagittis facilisi rutrum. Nulla a mi nec commodo arcu odio auctor torquent, malesuada sociis aenean volutpat elementum taciti purus interdum cursus, non mattis viverra sem inceptos nascetur potenti. Nostra cum pulvinar eget nascetur aliquet class mi praesent malesuada, felis nisl iaculis purus ac erat interdum orci, dignissim sed enim eu libero parturient diam congue.

Pharetra elementum dis praesent curabitur vivamus suscipit cras erat, laoreet lectus malesuada porttitor dictum cursus tincidunt, primis rhoncus interdum class proin a iaculis. Tempus himenaeos fusce tristique proin arcu dignissim, enim vestibulum accumsan ullamcorper blandit fermentum porta, litora consequat faucibus pellentesque ad. Est curabitur mus pretium fusce torquent nostra conubia, lacus malesuada tristique justo morbi semper turpis, netus venenatis vel himenaeos id nec. Sociis parturient enim sollicitudin porttitor leo velit ullamcorper erat vivamus eleifend purus lacus, cursus condimentum ligula tempor consequat dictum feugiat a nascetur platea dignissim.</p>
                </div>

                <img className="terapy_img" src={terapia} alt="terapia"></img>

            </div>
        );
    }
}

export default About;