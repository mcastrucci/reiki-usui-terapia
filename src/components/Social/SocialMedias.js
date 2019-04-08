import React, { Component } from 'react';
import './SocialMedias.css'

class SocialMedias extends Component {
    render(){
        return(
            <div className="social-medias">
                <div className="social-medias__facebook social-media_button">
                    <a href="https://www.facebook.com/samanta.castrucci" className="fa fa-facebook"> </a>
                </div>
                <div className="social-medias__whatsapp social-media_button fa fa-whatsapp" onClick={ ()=>this.props.onRouteChange('contact')}>
                </div>
                <div className="social-medias__Instagram social-media_button">
                <a href="https://www.instagram.com/reikiusuiterapias/?hl=en" className="fa fa-instagram"> </a>
                </div>
            </div>
        );
    }
}

export default SocialMedias;