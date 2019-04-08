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
                    <a href="https://www.facebook.com/samanta.castrucci"><img src={fbLogo} alt="Facebook logo"></img></a>
                </div>
                <div className="social-medias__whatsapp social-media_button">
                <img src={wpLogo} onClick={ ()=>this.props.onRouteChange('contact')} alt="Whatsapp logo"></img>
                </div>
                <div className="social-medias__Instagram social-media_button">
                <a href="https://www.instagram.com/reikiusuiterapias/?hl=en"><img src={inLogo} alt="Instagram logo"></img></a>
                </div>
            </div>
        );
    }
}

export default SocialMedias;