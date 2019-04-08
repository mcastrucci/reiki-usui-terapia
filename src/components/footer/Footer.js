import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
    render(){
        return(
            <footer className="footer">
                    <div><h2>a React App</h2></div>
                    <div className="footer__botoom_author">
                        <h2>2019 - Diseño y Desarrollo por Maximiliano Castrucci</h2>
                        <ul>
                            <li>
                                <a href="https://www.linkedin.com/in/maximiliano-castrucci-b1408b96/" >
                                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                                </a>
                            </li>

                            <li>
                                <a href="https://www.facebook.com/maximiliano.castrucci" >
                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                </a>
                            </li>

                        </ul>
                    </div>
            </footer>
        );
    }
}

export default Footer;