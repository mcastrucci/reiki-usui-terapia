import React, { Component } from 'react';
import './Home.css'
import ch1 from './images/ch1_logo.png'
import ch2 from './images/ch2_logo.png'
import ch3 from './images/ch3_logo.png'
import ch4 from './images/ch4_logo.png'
import ch5 from './images/ch5_logo.png'
import ch6 from './images/ch6_logo.png'
import ch7 from './images/ch7_logo.png'

class Home extends Component {
    render () {
        return (
            <div className="home home__container">  
              <h1 className="home__container__text">
                <span className="home__container__text--title">Reiki Usui Terapia</span>
                <span className="home__container__text--secondary">Busca paz para tu mente <br></br>y obtendras salud para tu cuerpo</span>
              </h1>

              
              <div className="home__container__chakras__main">
                  <div className="home__container__chakras home__container__chakras--ch1" onClick={ ()=>this.props.onRouteChange('home')}>
                    <img className="header__nav__navigator__list__div__ch-logo" src={ch1} alt="crown logo"></img>
                     <p className='ch_1'>Home</p>
                  </div>
                
                    <div className="home__container__chakras home__container__chakras--ch2" onClick={ ()=>this.props.onRouteChange('about')}>
                    <img className="header__nav__navigator__list__div__ch-logo" src={ch2} alt="third eye logo"></img>
                     <p className='ch_2'>Conoceme</p>
                    </div>

                    <div className="home__container__chakras home__container__chakras--ch3" onClick={ ()=>this.props.onRouteChange('reiki')}>
                    <img className="header__nav__navigator__list__div__ch-logo" src={ch3} alt="throat logo"></img>
                     <p className='ch_3'>Reiki</p>
                    </div>
                    <div className="home__container__chakras home__container__chakras--ch4" onClick={ ()=>this.props.onRouteChange('terapy')}>
                    <img className="header__nav__navigator__list__div__ch-logo" src={ch4} alt="heart logo"></img>
                     <p className='ch_4'>Terapia</p>
                    </div>
                    <div className="home__container__chakras home__container__chakras--ch5" onClick={ ()=>this.props.onRouteChange('contact')}>
                    <img className="header__nav__navigator__list__div__ch-logo" src={ch5} alt="plexus logo"></img>
                        <p className='ch_5'>Contacto</p>
                    </div>
                    <div className="home__container__chakras home__container__chakras--ch6" onClick={ ()=>this.props.onRouteChange('location')}>
                    <img className="header__nav__navigator__list__div__ch-logo" src={ch6} alt="sacro logo"></img>
                     <p className='ch_6'>ubicacion</p>
                     </div>
                    <div className="home__container__chakras home__container__chakras--ch7" onClick={ ()=>this.props.onRouteChange('chakras')}>
                    <img className="header__nav__navigator__list__div__ch-logo" src={ch7} alt="root logo"></img>
                        <p className='ch_7'>Chakras</p>
                    </div>
                </div>

            </div>
        );
    }
}

export default Home;