import React, { Component } from 'react';
import './Terapy.css'
import ReactGA from 'react-ga';
import {Helmet} from "react-helmet";

class Terapy extends Component {
    componentDidMount(){
        ReactGA.pageview('/therapy');
    }
    render () {
        return (
            <div className='therapy'>
                <Helmet>
                    <meta charSet="utf-8" />
                    <html lang="es" amp />
                    <title>Reiki Usui Terapia - Terapia</title>
                    <meta name="description" content="Terapia Reiki en Capital federal, Terapia Reiki en Boedo. ¿Como es una sesion de Reiki? ¿Cuantas sesiones de Reiki necesito?" />
                </Helmet>
                <div className="therapy__section therapy__section--1">
                    <h2>¿Cómo es una sesión de Reiki?</h2>
                    <p>
                    Una sesión de Reiki puede durar aproximadamente entre cuarenta y cinco y
                    cincuenta minutos. El paciente permanece acostado en una camilla, con los
                    ojos cerrados, descalzo y vestido. Durante la sesión se utiliza música relajante
                    y distintos aromas para ayudar a entrar en clima.
                    Antes de comenzar la sesión se mantiene una breve conversación para
                    entender la realidad actual del paciente.
                    Una vez terminada la charla, se recuesta sobre la camilla descalzo y con los
                    ojos cerrados. Se procede hacer un barrido del campo energético para así
                    comprender las sensaciones energéticas que derivan de cada uno de los
                    chakras.

                    Iniciado el tratamiento se colocan las manos sobre una serie de ubicaciones en
                    el cuerpo y la Energía Reiki fluye.
                    Durante la sesión, se puede sentir una relajación profunda, la sensación de
                    estar en paz. Hay personas que pueden quedarse dormidas, algo
                    perfectamente normal que no influye en el resultado final. Otras personas
                    pueden sentir cosquilleos, cambios en la temperatura corporal según el fluir de
                    la energía. Hay otras que ven colores, recuerdos o se sienten de flotar. Muchas
                    veces se pueden experimentar distintas emociones como reír o llorar. O
                    simplemente no sentir nada, lo que no quiere decir que la energía Reiki no este
                    funcionando. Simplemente que la forma de experimentar de cada uno es
                    personal.
                    </p>
                </div>
                <div className="therapy__section therapy__section--2">
                    <h2>¿Cuales son los beneficios de esta terapia?</h2>
                    <p>
                    Los beneficios mas notorios después de una sesión de Reiki son los
                    siguientes:</p>
                    <ul>
                        <li>    Descanso profundo.</li>
                        <li>    Disminución del estrés y la ansiedad.</li>
                        <li>    Mejora la concentración.</li>
                        <li>    Mejora el estado de ánimo</li>
                        <li>    trae una mayor equilibrio emocional.</li>
                        <li>    Mejora la creatividad.</li>
                        <li>    Alivia dolores.</li>
                        <li>    Trae mayor energía física</li>
                        <li>    mejora la seguridad en uno mismo</li>
                    </ul>        
                </div>

                <div className="therapy__section therapy__section--2">
                    <h2>¿Cuantas sesiones necesito para mejorar?</h2>
                    <p>
                        Sí bien desde la primera sesión ya podemos percibir los cambios y las
                        sensaciones lo ideal para lograr un equilibrio total son cuatro sesiones que
                        se suelen dar una vez por semana.
                    </p>
  
                </div>

                <blockquote>
                El REIKI ha sido reconocido por la Organización Mundial de la Salud
                (OMS) como una terapia complementaria de sanación.
                Hay que aclarar que bajo ningún punto de vista el Reiki puede
                remplazar un tratamiento medico.
                </blockquote>
            </div>
        );
    }
}

export default Terapy;