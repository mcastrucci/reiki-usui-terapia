import React, { Component } from 'react';
import './Contact.css';
import Location from '../location/Location';
import ReactGA from 'react-ga';
import {Helmet} from "react-helmet";

class Contact extends Component {

    componentDidMount(){
        ReactGA.pageview('/contact');
    }

    render(){
        return(
            <div className="contact">
                  <Helmet>
                    <meta charSet="utf-8" />
                    <html lang="es"/>
                    <title>Reiki Usui Terapia - Contacto</title>
                    <meta name="description" content="Reiki en Capital federal, boedo. contactame por turnos, terapias registros akashicos y mas!" />
                </Helmet>
                <h2 className="contact__title">Contactate conmigo</h2>
                <div className="contact__contain">
                    <form action="https://formspree.io/samanta.castrucci@gmail.com" method="POST" className="contact__form">
                        <div className="contact__form__top">
                            <div className="contact__form__top--fields">
                                <input name="name" required type="text" className="contact__feedback-input" placeholder="Nombre" />   
                                <input name="email" required type="email" className="contact__feedback-input" placeholder="Email" />
                            </div>
                            <h2>Enviame un mensaje</h2>
                        </div>
                        <div className="contact__bottom">
                            <textarea name="text" className="contact__feedback-input" placeholder="escribime"></textarea>
                            <input type="submit" value="ENVIAR"/>
                        </div>
                    </form>
                    <div></div>
                    <div className="contact__social">
                        <div className="contact__social__chanels">
                            <h2 className="contact__social__chanel--name">Informacion de contacto</h2>
                            <div className="contact__social__chanel contact__social__chanel--phone">
                                <i className="fa fa-mobile" aria-hidden="true"></i>
                                <a href="1134274252">(+549) 11-3450-1312 </a>
                            </div>
                            <div className="contact__social__chanel contact__social__chanel--mail">
                                <i href="www." className="fa fa-envelope-o"> </i>
                                <a href="mailto:samanta.castrucci@gmail.com">samanta.castrucci@gmail.com</a>  
                            </div>
                        </div>
                        <div className="contact__Social_medias">
                            <p>Seguime en las redes sociales</p>
                            <div>
                                <a href="https://www.facebook.com/reikiusuiterapiass/" className="fa fa-facebook"> </a>
        <                       a href="https://www.instagram.com/reikiusuiterapias/?hl=en" className="fa fa-instagram"> </a>
                            </div>
                        </div>
                    </div>
                </div>
                <Location/>
            </div>
        );
    };
}

export default Contact;