import React, { Component } from 'react';
import './SocialMedias.css'
import fbLogo from './_ionicons_svg_logo-facebook.svg';
import wpLogo from './_ionicons_svg_logo-whatsapp.svg';
import inLogo from './_ionicons_svg_logo-instagram.svg';

class SocialMedias extends Component {
    render(){
        return(
            <div className="social-medias">
                <div className="social-medias__facebook social-media_button">
                    <a href="www."><img src={fbLogo} alt="Facebook logo"></img></a>
                </div>
                <div className="social-medias__whatsapp social-media_button">
                <a href="www."><img src={wpLogo} alt="Whatsapp logo"></img></a>
                </div>
                <div className="social-medias__Instagram social-media_button">
                <a href="www."><img src={inLogo} alt="Instagram logo"></img></a>
                </div>
            </div>
        );
    }
}

export default SocialMedias;