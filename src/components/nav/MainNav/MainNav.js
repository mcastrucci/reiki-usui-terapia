import React, { Component } from 'react';
import '../Nav.css'
import ch1 from '../ch1_logo.png'
import ch2 from '../ch2_logo.png'
import ch3 from '../ch3_logo.png'
import ch4 from '../ch4_logo.png'
import ch5 from '../ch5_logo.png'
import ch6 from '../ch6_logo.png'
import ch7 from '../ch7_logo.png'

class MainNav extends Component {
    render(){
        return(
                <div className="header__nav__navigator__list">
                  <div className="header__nav__navigator__list__div ch_con ch_con--1">
                    <img className="header__nav__navigator__list__div__ch-logo" src={ch1} alt="crown logo" height="35" width="35"></img>
                     <p className='ch_1' onClick={ ()=>this.props.onRouteChange('home')}>Home</p>
                  </div>
                
                    <div className="header__nav__navigator__list__div ch_con ch_con--2">
                    <img className="header__nav__navigator__list__div__ch-logo" src={ch2} alt="third eye logo" height="30" width="30"></img>
                     <p className='ch_2' onClick={ ()=>this.props.onRouteChange('about')}>Conoceme</p>
                    </div>

                    <div className="header__nav__navigator__list__div ch_con ch_con--3">
                    <img className="header__nav__navigator__list__div__ch-logo" src={ch3} alt="throat logo" height="30" width="30"></img>
                     <p className='ch_3' onClick={ ()=>this.props.onRouteChange('reiki')}>Reiki</p>
                    </div>
                    <div className="header__nav__navigator__list__div ch_con ch_con--4">
                    <img className="header__nav__navigator__list__div__ch-logo" src={ch4} alt="heart logo" height="30" width="30"></img>
                     <p className='ch_4' onClick={ ()=>this.props.onRouteChange('terapy')}>Terapia</p>
                    </div>
                    <div className="header__nav__navigator__list__div ch_con ch_con--5">
                    <img className="header__nav__navigator__list__div__ch-logo" src={ch5} alt="plexus logo" height="30" width="30"></img>
                        <p className='ch_5' onClick={ ()=>this.props.onRouteChange('contact')}>Contacto</p>
                    </div>
                    <div className="header__nav__navigator__list__div ch_con ch_con--6">
                    <img className="header__nav__navigator__list__div__ch-logo" src={ch6} alt="sacro logo" height="30" width="30"></img>
                     <p className='ch_6' onClick={ ()=>this.props.onRouteChange('location')}>ubicacion</p>
                     </div>
                    <div className="header__nav__navigator__list__div ch_con ch_con--7">
                    <img className="header__nav__navigator__list__div__ch-logo" src={ch7} alt="root logo" height="30" width="30"></img>
                        <p className='ch_7'onClick={ ()=>this.props.onRouteChange('chakras')}>Chakras</p>
                    </div>
                </div>
        );
    }
}

export default MainNav;