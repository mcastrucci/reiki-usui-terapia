import React, { Component } from 'react';
import './Contact.css';
import Location from '../location/Location';

class Contact extends Component {

    render(){
        return(
            <form className="contact">
                <h2 className="contact__title">Contactame!</h2>
                <div className="contact__contain">
                    <div className="contact__social">
                        <div className="contact__social__phone">
                        <i className="fa fa-mobile" aria-hidden="true"></i>
                            <p>Podes contactarme al:  (+549) 11-3450-1312 <br></br>para reserva de turnos, cosultas y mas</p>
                        </div>
                        <div className="contact__social__mail">
                            <a href="www." className="fa fa-envelope-o"> </a>
                            <p>Podes enviarme un email a <br></br>samanta.castrucci@gmail.com</p>
                        </div>
                        <div className="contact__Social_medias">
                            <p>Seguime en las redes sociales!</p>
                            <div>
                                <a href="https://www.facebook.com/samanta.castrucci" className="fa fa-facebook"> </a>
        <                       a href="https://www.instagram.com/reikiusuiterapias/?hl=en" className="fa fa-instagram"> </a>
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