import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
          {
            (this.props.route === 'home') ?
            <div className="header__container header__container--bg1">  
              <h1 className="header__container__text">
                <span className="header__container__text__title">Reiki Usui Terapia</span>
                <span class="header__container__text__secundary">Busca paz para tu mente <br></br>y obtendras salud para tu cuerpo</span>
              </h1>
            </div>
            : (this.props.route === 'chakras') ?
              <div className="header__container header__container--chakras">  
              <h1 className="header__container__text">
                <span className="header__container__text__title">Los Chakras</span>
                <span className="header__container__text__secundary">¿Que son los chakras?<br></br>¿Como interactuan con mi cuerpo?</span>
              </h1>
            </div>
            :(this.props.route === 'reiki') ?
            <div className="header__container header__container--bg3">  
              <h1 className="header__container__text">
                <span className="header__container__text__title">El reiki</span>
                <span className="header__container__text__secundary">¿Que es el Reiki?
                 <br></br>Beneficios del reiki</span>
              </h1>
            </div>
            :(this.props.route === 'about') ?
            <div className="header__container header__container--bg4">  
              <h1 className="container__about">
                <span className="header__container__text__title">Samanta Castrucci</span>
                <span className="header__container__text__secundary">Un poco sobre mi</span>
              </h1>
            </div>
            :(this.props.route === 'terapy') ?
            <div className="header__container header__container--bg2">  
              <h1 className="header__container__text--right">
                <span className="header__container__text__title">Terapia</span>
                <span className="header__container__text__secundary">¿En que consiste?</span>
              </h1>
            </div>
            :(this.props.route === 'location') ?
            <div className="header__container header__container--location">  
              <h1 className="header__container__text">
                <span className="header__container__text__title">Donde encontrarme?</span>
              </h1>
            </div>
            :<div></div>
          }

      </header>
    );
  }
}

export default Header;
