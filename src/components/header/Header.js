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
              <div className="header__container header__container--bg2">  
              <h1 className="header__container__text">
                <span className="header__container__text__title">Si como huevo me patea el higado</span>
                <span class="header__container__text__secundary">Si como higado.. <br></br>Me pateara un huevo?</span>
              </h1>
            </div>
            :(this.props.route === 'reiki') ?
            <div className="header__container header__container--bg3">  
              <h1 className="header__container__text">
                <span className="header__container__text__title">El reiki</span>
                <span class="header__container__text__secundary">El reiki
                 <br></br>Es Chevere.</span>
              </h1>
            </div>
            :<div></div>
          }

      </header>
    );
  }
}

export default Header;
