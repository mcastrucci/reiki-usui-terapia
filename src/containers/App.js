import React, { Component } from 'react';
import './App.css';
import Header from '../components/header/Header';
import SocialMedias from '../components/Social/SocialMedias';
import Nav from '../components/nav/Nav'
import Footer from '../components/footer/Footer'


class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav/>
          <div className="app_boddy">
            <Header/>
            <div>
              <h2 className="test">¿Que es el Reiki?</h2>
              <p className="test">Reiki es una palabra sánscrita que significa REI, energía universal y KI, energía vital.

  Reiki actúa en profundidad yendo a la raíz del problema físico o emocional, permitiendo que la emoción o el patrón de conducta que ha creado el desequilibrio, se manifieste y sea sanado.

  Reiki puede usarse también, combinado con tratamiento alopático, homeopatía, reflexología, etc.

  También nos ayuda al crecimiento personal y a la expansión de nuestra conciencia.

  La terapia Reiki pueden recibirla todos los seres humanos (adultos sanos, enfermos, embarazadas, niños y bebés), incluso también los animales y las plantas.

  Es una terapia complementaria a la medicina convencional y terapias psicológicas reconocida por la Organización mundial de la salud (OMS).</p>
            </div>
            <Footer/>
          </div>
          <SocialMedias/>
      </div>
    );
  }
}

export default App;
