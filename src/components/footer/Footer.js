import React, { Component } from 'react';
import './Footer.css'
import fbLogo from './_ionicons_svg_logo-facebook.svg';
import wpLogo from './_ionicons_svg_logo-whatsapp.svg';
import inLogo from './_ionicons_svg_logo-instagram.svg';

class Footer extends Component {
    render(){
        return(
            <footer className="footer">
                <div className="footer__top">
                    <div className="footer__top__social">
                        <p>Seguime en las redes y mantenete al tanto de novedades ;)</p>
                        <div className="footer_top__social_icons">
                            <div className="footer__top__social__facebook">
                                <a href="www."><img src={fbLogo} alt="Facebook logo" height="35" width="35"></img></a>
                            </div>
                            <div className="footer__top__social__whatsapp">
                             <a href="www."><img src={wpLogo} alt="Whatsapp logo" height="35" width="35"></img></a>
                            </div>
                            <div className="footer__top__social__instagram">
                                <a href="www."><img src={inLogo} alt="Instagram logo" height="35" width="35"></img></a>
                            </div>
                        </div>
                    </div>
                    <div className="footer__top__about"> 
                        <p>
                        Copyright (c) 2003 Company Name
                        All Rights Reserved
 
                        This product is protected by copyright and distributed under
                        licenses restricting copying, distribution, and decompilation.
                        </p>
                    </div>
                    <div className="footer__top__contact"> 
                        <div>
                            <p>Contactame</p>
                        </div>
                        <iframe src="https://www.powr.io/plugins/map/view/19172274?mode=page" frameborder='0' scrolling="no">
                        </iframe>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="footer__botoom_author">Diseño: Maximiliano Castrucci</div>
                </div>
            </footer>
        );
    }
}

export default Footer;