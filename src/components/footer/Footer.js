import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
    render(){
        return(
            <footer className="footer">
                    <div><h2>React</h2></div>
                    <div className="footer__botoom_author">
                        <h2>Diseño y Desarrollo por Maximiliano Castrucci</h2>
                    </div>
            </footer>
        );
    }
}

export default Footer;