import React, { Component } from 'react';
import './StickyNav.css'
import ch1 from '../images/ch1_logo.png'
import ch2 from '../images/ch2_logo.png'
import ch3 from '../images/ch3_logo.png'
import ch4 from '../images/ch4_logo.png'
import ch5 from '../images/ch5_logo.png'
import ch6 from '../images/ch6_logo.png'
import ch7 from '../images/ch7_logo.png'

class StickyNav extends Component {
    render(){
        return(
                <div className="sticky__nav__list">
                  <div className="sticky__nav__list__div ch_con ch_con--1" onClick={ ()=>{this.props.onRouteChange('home'); this.props.mouseHover();}}>
                    <img classname="sticky__nav__list__div__ch-logo" src={ch1} alt="crown logo" height="35" width="35"></img>
                        <p className='ch_1'>Home</p>
                  </div>
                
                    <div className="sticky__nav__list__div ch_con ch_con--2" onClick={ ()=>{this.props.onRouteChange('about');this.props.mouseHover();}}>
                    <img classname="sticky__nav__list__div__ch-logo" src={ch2} alt="third eye logo" height="30" width="30"></img>
                        <p className='ch_2'>Conoceme</p>
                    </div>

                    <div className="sticky__nav__list__div ch_con ch_con--3" onClick={ ()=>{this.props.onRouteChange('reiki');this.props.mouseHover();}}>
                    <img classname="sticky__nav__list__div__ch-logo" src={ch3} alt="throat logo" height="30" width="30"></img>
                        <p className='ch_3'>Reiki</p>
                    </div>
                    <div className="sticky__nav__list__div ch_con ch_con--4" onClick={ ()=>{this.props.onRouteChange('terapy');this.props.mouseHover();}}>
                    <img classname="sticky__nav__list__div__ch-logo" src={ch4} alt="heart logo" height="30" width="30"></img>
                        <p className='ch_4'>Terapia</p>
                    </div>
                    <div className="sticky__nav__list__div ch_con ch_con--5" onClick={ ()=>{this.props.onRouteChange('contact'); this.props.mouseHover();}}>
                    <img classname="sticky__nav__list__div__ch-logo" src={ch5} alt="plexus logo" height="30" width="30"></img>
                        <p className='ch_5'>Contacto</p>
                    </div>
                    <div className="sticky__nav__list__div ch_con ch_con--6" onClick={ ()=>{this.props.onRouteChange('location');this.props.mouseHover();}}>
                    <img classname="sticky__nav__list__div__ch-logo" src={ch6} alt="sacro logo" height="30" width="30"></img>
                        <p className='ch_6'>ubicacion</p>
                     </div>
                    <div className="sticky__nav__list__div ch_con ch_con--7" onClick={ ()=>{this.props.onRouteChange('chakras');this.props.mouseHover();}}>
                    <img classname="sticky__nav__list__div__ch-logo" src={ch7} alt="root logo" height="30" width="30"></img>
                        <p className='ch_7'>Chakras</p>
                    </div>
                </div>
        );
    }
}

export default StickyNav;