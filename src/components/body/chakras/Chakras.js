import React, { Component } from 'react';
import './Chakras.css';
import ch1_image from './images/ch1_background.png';
import ch2_image from './images/ch2_background.png';
import ch3_image from './images/ch3_background.png';
import ch4_image from './images/ch4_background.png';
import ch5_image from './images/ch5_background.png';
import ch6_image from './images/ch6_background.png';
import ch7_image from './images/ch7_background.png';

class Chakras extends Component {
    render (){
        return (
            <div className="chakras">
                <h1>Los Chakras</h1>
                <div className='chakras__section chakras__section--1'>
                    <h2>Primer Chakra - Muladhara</h2>
                    <div className="chakras__section__chakra__container">
                        <img className="chakras__section__chakra__container--image" src={ch1_image} alt="first chakgra"></img>
                        <div className="chakras__section__chakra__container--explanation">
                            <p>
                            Este chakra regula las fuerzas que se relacionan con nuestro ser físico y nuestra relación con el mundo material, además de la conexión con la tierra. Es el más cercano a nuestra naturaleza más básica y terrenal y el más alejado de nuestro ser trascendental, pero es tan
        necesario como los más espirituales porque procura nuestrasupervivencia y nuestro bienestar físico, así como nuestra seguridad personal. 

        Un primer chakra débil se puede manifestar en inseguridad, depresión, problemas de salud, falta de estabilidad y problemas económicos. Es común que se debilite ante grandes cambios o al cambiar de lugar. Su función desequilibrada puede generar agresividad, posesividad o codicia.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='chakras__section chakras__section--2'>
                    <h2>Segundo Chakra - Svadhisthana</h2>
                    <div className="chakras__section__chakra__container">
                        <img className="chakras__section__chakra__container--image" src={ch2_image} alt="second chakra"></img>
                        <div className="chakras__section__chakra__container--explanation">
                        <p>
                    Este chakra complementa la pulsión de vida con la alegría, la pasión y el disfrute. 

La vibración de Svadhisthana está relacionada con la sexualidad como una fuerza creativa, También parte de este centro energético es la sensualidad, entendida como el despertar de los sentidos, a través de los cuales honramos nuestro ser físico y percibimos el mundo, la capacidad de goce en el momento presente que nos permite sentirnos conectados con la vida.
Si el segundo chakra está equilibrado las personas son confiadas, expresivas, en sintonía con sus sentimientos y creativas. 
Si esta bloqueado. Son personas excesivamente sensibles, duras consigo mismas, se sienten culpables sin razón alguna, pueden sufrir frigidez o impotencia.

                    </p>
                        </div>
                    </div>
                </div>
                <div className='chakras__section chakras__section--3'>
                    <h2>Tercer Chakra - Manipura</h2>
                    <div className="chakras__section__chakra__container">
                        <img className="chakras__section__chakra__container--image" src={ch3_image} alt="third chakra"></img>
                        <div className="chakras__section__chakra__container--explanation">
                        <p>
                        está relacionado con los procesos purificadores del cuerpo y la limpieza de toxinas. Es el más grande de todos los chakras y el más potente.

En el plano físico, este chakra tiene un efecto estimulante sobre los nervios. Si se encuentra sano y equilibrado, irradia una sensación de estar en control de los acontecimientos y una buena coordinación y orientación física.

Un tercer Chakra equilibrado revela capacidad para obtener logros y un temperamento caliente que disfruta ser el centro de atención y hablar con soltura.
Un tercer Chakra bloqueado se traducen en impotencia y sensaciones de desorientación y vida dispersa, sin objetivos definidos. La persona puede volverse insegura y obsesiva.
                    </p>
                        </div>
                    </div>
                </div>
                <div className='chakras__section chakras__section--4'>
                    <h2>Cuarto Chakra - Anahata</h2>
                    <div className="chakras__section__chakra__container">
                        <img className="chakras__section__chakra__container--image" src={ch4_image} alt="Forth chakra"></img>
                        <div className="chakras__section__chakra__container--explanation">
                        <p>
                        pasa toda la energía que llega a los demás chakras y regula la calidad de alegría, temor, ira y dolor. Estimula el sistema inmunitario y protege de enfermedades. Desarrolla el sentido de la belleza y la armonía y representa la fuerza de voluntad del yo.

Un chakra sano produce una valoración de las cosas simples de la vida y la satisfacción con lo que se tiene. 
Si el cuarto chakra está desequilibrado se producen sensaciones de soledad, tristeza y melancolía. También se resiente la autoestima y la persona puede volverse inestable. A nivel físico se resiente el sistema inmunológico
                        </p>
                        </div>
                    </div>
                </div>
                    
                <div className='chakras__section chakras__section--5'>
                    <h2>Quinto Chakra - Vishuddha</h2>
                    <div className="chakras__section__chakra__container">
                        <img className="chakras__section__chakra__container--image" src={ch5_image} alt="Fifth chakra"></img>
                        <div className="chakras__section__chakra__container--explanation">
                        <p>
                        se asocia al éter, la audición, el control del metabolismo y el equilibrio corporal. La expresión física del buen funcionamiento de este chakra consiste en ayudar a manifestarnos con la voz.  Se lo relaciona con el sonido y tiene mucho que ver con la expresión vocal y la comunicación verbal. 

Si el quinto Chakra, Vishuddha, está desequilibrado pueden aparecer problemas de salud relacionados con asma, alergias, problemas dentales, dolor de garganta, laringitis, problemas de piel, etc. Dificultades en la comunicación o en la expresión de sentimientos. Sentimientos más o menos inconscientes de culpa y angustia que impiden vernos y mostrarnos como somos o expresar nuestros pensamientos y sentimientos.
                        </p>
                        </div>
                    </div>
                </div>

                <div className='chakras__section chakras__section--6'>
                    <h2>Sexto Chakra - Ajna</h2>
                    <div className="chakras__section__chakra__container">
                        <img className="chakras__section__chakra__container--image" src={ch6_image} alt="Sixth chakra"></img>
                        <div className="chakras__section__chakra__container--explanation">
                        <p>
                        en el se encuentra la capacidad del recuerdo, de la voluntad y la capacidad intelectual de diferenciación. Este chakra es la torre de control del sistema nervioso. Es conocido como el “tercer ojo”. En el sexto Chakra, reside la fuerza superior. Es la representación de la intuición, la clarividencia y la percepción extrasensorial.

Si el sexto Chakra, Ajna no está bien equilibrado nuestra intuición estará mermada y tendremos dificultades para visualizar y proyectar. Es fácil que sigamos algunas ideas equivocadas y que nos embarquemos en proyectos que nos pueden causar perjuicio.
Físicamente puede causar problemas en los ojos, como las cataratas o la miopía, dolor de cabeza, quistes, vértigo o sinusitis.
                        </p>
                        </div>
                    </div>
                </div>
                <div className='chakras__section chakras__section--7'>
                    <h2>Septimo Chakra - Sahasrara</h2>
                    <div className="chakras__section__chakra__container">
                        <img className="chakras__section__chakra__container--image" src={ch7_image} alt="Seventh chakra"></img>
                        <div className="chakras__section__chakra__container--explanation">
                        <p>
                        es el centro de la sabiduría y la espiritualidad.
Este chakra es el más sutil de todos. Se le llama también el de la Luz Blanca y se dice que es el nivel del alma. Algunos especialistas afirman que este chakra es la referencia básica para regresar al cuerpo físico en los viajes astrales.

Sahasrara también es conocido como el Centro de Conciencia Cósmica, el “Yo soy”. La persona cuando tiene este chakra en equilibrio tiene una sensación de liberación e iluminación. Hay una sensación de amor universal, de notar como en el universo todo es Uno. Nos aporta el concepto de Unidad.

Cuando el séptimo Chakra, Sahasrara, está desequilibrado nos sentiremos solos, desamparados. Es el concepto de Separación. El desequilibrio de este chakra hace que se pierda el interés por lo espiritual, que nos creamos siempre en posesión de la verdad, se pierda el respeto por los demás y nos sintamos coartados para expresar lo que sentimos.
A nivel físico pueden tenerse problemas oculares, dolores de cabeza, depresión, insomnio y desordenes en el sistema nervioso.
                        </p>
                        </div>
                    </div>
                </div>

                
            </div>
        );
    }
}

export default Chakras;