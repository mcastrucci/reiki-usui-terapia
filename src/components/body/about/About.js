import React, { Component } from 'react';
import './About.css'
import picture from './samita.jpg'
import terapia from './terapia.PNG'

class About extends Component {
    render(){
        return (
            <div className="about-me">
                <p className="about-me__resume">
                    <span className="about-me__resume__capital">M</span>i nombre es Samanta Castrucci, tengo 31 años, y soy una enamorada de la vida. Terapeuta holistica. maestra de Reiki Usui y Karuna. Flores de Bach, aromaterapia, gemoterapia y rocíos auricos. 
                    Actualmente soy estudiante de Hatha Yoga y estoy comenzando a recorrer el hermoso camino de los Registros Akashicos.
                </p>
                <h3 className="about-me__title">¿Cómo comencé en este nuevo mundo?</h3>
                <div className="about-me__explanation">
                    <img src={picture} alt="me"></img>
                    <div className="about-me__explanation__Text">
                        <p><strong>Hace algunos años, tras malas experiencias personales, un trabajo agobiante y una vida a la que no le encontraba sentido, toque fondo.</strong> Comencé con un pico de estrés al que no le presté atención a pesar de las señales que mi cuerpo presentaba. Yo era más fuerte que todo y podía sola contra todo. O eso pensaba. A estas pequeñas alertas le siguió un trastorno de ansiedad que luego desembocó en ataques de pánico y una depresión profunda. Psicólogos, psiquiatras, medicación constante... Cosas que poco ayudaban, ya que si bien frenaban mi ansiedad  y evitaban mis ataques de pánico, muy dentro mío sentía que estaba escondiendo la basura debajo de la alfombra. <strong>Me sentía vacía a pesar de lo mucho que tenía...    </strong> 
                        ¿Qué es lo bueno de tocar fondo? Que mas abajo no podes llegar. Solo te queda dar ese pequeño salto que te lleva de nuevo a la superficie. Una superficie a la cual hoy veo con otros ojos y la encuentro maravillosa.
                        </p>
                    </div>
                </div>

                <div>
                    <p className="about-me__explanation__full-width">
                     <span className="about-me__resume__capital">U</span>na amiga me comentó del Reiki y de sus beneficios, yo no creía en nada de eso. Lo analice mucho y mi pensamiento fue el siguiente: la energía existe, ¿verdad? Es un hecho científico, algo irrefutable. ¿Y la imposición de manos cómo podía ayudar? Enseguida se me vinieron los recuerdos de las veces que de chiquita me dolía la panza y mi bisabuela me colocaba las manos con la intención de sanarme. ¡Y funcionaba! Llámenlo placebo o como más les guste. Pero era así, me calmaba... 
                    ¿Y si algo tan instintivo como el amor de una madre o una abuela podía hacer que me sintiera mejor, cómo podía no creer que otro ser humano, con experiencia en la canalización de energía y con buena intención, no iba a poder ayudarme? No creía poder curarme, pero sí lograr relajarme. 
                    Tras esa reflexión <strong>me decidí a ir a una sesión de Reiki, aún sin creer realmente en lo que decían que iba sentir.</strong> Tuve la suerte de encontrarme con una persona maravillosa, la cual no solo me dio Reiki sino que me guió en todo mi proceso. Me abrió esos ojos que se negaban a ver tantas cosas. Fue un largo camino, pero maravilloso. Sentir la energía, sentir los cambios en mi cuerpo, volverme a sentir revitalizada, dormir bien... 
                    </p>
                    <blockquote>Me empecé a interesar en algo en lo que nunca me imagine creer, comencé a ir a clases de Yoga, algo que descubrí que amo, y empecé a meditar. Volví a dibujar, a pintar, a hacer artesanías, cosas que había abandonado en la adolescencia.</blockquote> 
                    <p className="about-me__explanation__full-width">Aprendí a manejar mis ataques y mis angustias con tan solo una respiración y, a través de la meditación, comprendí realmente qué me sucedía. <strong>El sistema y el mundo material en el que vivimos nos sumergen en una corriente contra la que es muy difícil nadar. Dejamos de ser quienes somos y nos convertimos en lo que debemos ser. </strong>Dejamos de disfrutar de las pequeñas cosas y encontramos cobijo casi exclusivamente en lo material. O al menos esa fue mi experiencia personal. Me negué a todo lo que me hacía feliz solo por incorporarme a un sistema al que no quería pertenecer. Fue un despertar espiritual, eso es lo que mi cuerpo me pedía con todas aquellas alertas. Reconectarme conmigo misma, con la naturaleza y con mis pasiones. Volver a tener fe y comprender que existe mucho más que este mundo.
                    <br></br><strong>Jamás dejé los tratamientos médicos hasta que me lo indicaron. Como ya les conté antes, el Reiki es una terapia complementaría, pero nunca debe remplazar a cualquier tratamiento medico tradicional.</strong>
                    Mis problemas seguían existiendo, pero empecé a verlos desde otro lugar. Toda mi vida pude verla con otra perspectiva, apreciar realmente todo lo que tengo, que es mucho, a ser agradecida y a dejar de sufrir por cosas sin sentido. Un mundo nuevo se abrió ante mis ojos, un universo que vibraba y yo estaba en su misma sintonía. 
                    </p>
                </div>
                <div>
                    <h3 className="about-me__title">Y si algo me hacia tan bien, ¿por qué no aprenderlo?</h3>
                    <div className="about-me__footer-text">
                        <img className="terapy_img" src={terapia} alt="terapia"></img>
                        <div className="about-me__footer-text__text">
                            <p>
                            <span className="about-me__resume__capital">E</span>l día que me planteé esa pregunta, me llené de felicidad. Es algo muy difícil de trasmitir con palabras. <strong>Todos podemos dar Reiki con el conocimiento adecuado</strong>, la creencia y la canalización de un maestro. Además, si podía aprender a dar Reiki, más adelante iba a poder ayudar a personas, tal como lo hicieron conmigo. Con tan solo un pensamiento, ese día encontré mi objetivo y dejé de sentirme vacía. Hoy nada me da más satisfacción que poder ayudar a otros. 
                            Primeramente me inicié en Reiki Usui tradicional y, luego, siguió el Tibetano y el Karuna. También, más adelante, me interesé en otras terapias alternativas. Un camino el cual aún hoy estoy recorriendo y pretendo seguir haciéndolo.  
                            </p>
                        </div>
                    </div>
                </div>
                <blockquote>
                            Hoy en día puedo asegurar que no hay nada que me de mayor satisfacción que saber que gracias al Reiki, la energía vital y universal, puedo ayudar a un amigo, a un familiar o conversar con un paciente días después de una sesión y saber que lo ayude, que se sintió mejor y que, al igual que yo, va abrir los ojos y despertar. 
                            Al guiar a una persona en sus procesos de sanación nos beneficiamos todos debido a que se crea una unidad. Esa persona vibra en una frecuencia más alta, una vibración que contagia y que está en sintonía con el universo. Una vibración de la que si todos pudiésemos formar parte, este mundo se convertiría en un lugar mejor. 
                </blockquote>
            </div>
        );
    }
}

export default About;