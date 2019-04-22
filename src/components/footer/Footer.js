import React, { Component } from 'react';
import './Footer.css';
import reactIcon from './react.svg';

class Footer extends Component {
    render(){
        return(
            <footer className="footer">
                    <div className="footer__react">
                        <img src={reactIcon} alt="react"></img>
                        <h3>React</h3>
                    </div>
                    <div className="footer__botoom_author">
                        <h2>2019 - Diseño y Desarrollo por Maximiliano Castrucci</h2>
                        <a href="http://mcastrucci-portfolio.herokuapp.com/">http://mcastrucci-portfolio.herokuapp.com/</a>
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