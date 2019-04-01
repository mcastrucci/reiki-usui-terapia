import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
          {
          
          }
          <div className="header__container">
          
            <h1 className="header__container__text">
              <span className="header__container__text__title">Reiki Usui Terapia</span>
              <span class="header__container__text__secundary">Busca paz para tu mente <br></br>y obtendras salud para tu cuerpo</span>
            </h1>
          </div>
      </header>
    );
  }
}

export default Header;
