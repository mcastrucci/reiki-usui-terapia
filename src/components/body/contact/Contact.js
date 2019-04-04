import React, { Component } from 'react';
import './Contact.css';
import phoneLogo from './phone_logo.png'
import Location from '../location/Location';

class Contact extends Component {

    render(){
        return(
            <form className="contact">
                <h2 className="contact__title">Contactame!</h2>
                <div className="contact__contain">
                    <div className="contact__social">
                        <div className="contact__social__phone">
                        <img src={phoneLogo} alt="phone logo"></img>
                            <p>Podes contactarme al: 1122334455 <br></br>para reserva de turnos, cosultas y mas</p>
                        </div>
                        <div className="contact__social__mail">
                            <a href="www" className="fa fa-envelope-o"> </a>
                            <p>Podes enviarme un email a <br></br>samanta.castrucci@gmail.com</p>
                        </div>
                        <div className="contact__Social_medias">
                            <p>Seguime en las redes sociales!</p>
                            <div>
                                <a href="www" className="fa fa-facebook"> </a>
        <                       a href="www" className="fa fa-instagram"> </a>
        <                       a href="www" className="fa fa-whatsapp"> </a>
                            </div>
                        </div>
                    </div>
                    <div className="contact__form">
                        <h2>Enviame un mensaje</h2>
                        <input name="name" type="text" className="contact__feedback-input" placeholder="Nombre" />   
                        <input name="email" type="text" className="contact__feedback-input" placeholder="Email" />
                        <textarea name="text" className="contact__feedback-input" placeholder="escribime"></textarea>
                        <input type="submit" value="ENVIAR"/>
                    </div>  
                </div>
                <Location/>
            </form>
        );
    };
}

export default Contact;