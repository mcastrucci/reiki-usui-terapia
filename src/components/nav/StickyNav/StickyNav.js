import React, { Component } from 'react';
import './StickyNav.css'
import ch1 from '../ch1_logo.png'
import ch2 from '../ch2_logo.png'
import ch3 from '../ch3_logo.png'
import ch4 from '../ch4_logo.png'
import ch5 from '../ch5_logo.png'
import ch6 from '../ch6_logo.png'
import ch7 from '../ch7_logo.png'

class StickyNav extends Component {
    render(){
        return(
                <div className="sticky__nav__list">
                  <div className="sticky__nav__list__div ch_con ch_con--1">
                    <img classname="sticky__nav__list__div__ch-logo" src={ch1} alt="crown logo" height="35" width="35"></img>
                        <p className='ch_1' onClick={ ()=>{this.props.onRouteChange('home'); this.props.mouseHover();}}>Home</p>
                  </div>
                
                    <div className="sticky__nav__list__div ch_con ch_con--2">
                    <img classname="sticky__nav__list__div__ch-logo" src={ch2} alt="third eye logo" height="30" width="30"></img>
                        <p className='ch_2' onClick={ ()=>{this.props.onRouteChange('about');this.props.mouseHover();}}>Conoceme</p>
                    </div>

                    <div className="sticky__nav__list__div ch_con ch_con--3">
                    <img classname="sticky__nav__list__div__ch-logo" src={ch3} alt="throat logo" height="30" width="30"></img>
                        <p className='ch_3' onClick={ ()=>{this.props.onRouteChange('reiki');this.props.mouseHover();}}>Reiki</p>
                    </div>
                    <div className="sticky__nav__list__div ch_con ch_con--4">
                    <img classname="sticky__nav__list__div__ch-logo" src={ch4} alt="heart logo" height="30" width="30"></img>
                        <p className='ch_4' onClick={ ()=>{this.props.onRouteChange('terapy');this.props.mouseHover();}}>Terapia</p>
                    </div>
                    <div className="sticky__nav__list__div ch_con ch_con--5">
                    <img classname="sticky__nav__list__div__ch-logo" src={ch5} alt="plexus logo" height="30" width="30"></img>
                        <p className='ch_5' onClick={ ()=>{this.props.onRouteChange('contact'); this.props.mouseHover();}}>Contacto</p>
                    </div>
                    <div className="sticky__nav__list__div ch_con ch_con--6">
                    <img classname="sticky__nav__list__div__ch-logo" src={ch6} alt="sacro logo" height="30" width="30"></img>
                        <p className='ch_6' onClick={ ()=>{this.props.onRouteChange('location');this.props.mouseHover();}}>ubicacion</p>
                     </div>
                    <div className="sticky__nav__list__div ch_con ch_con--7">
                    <img classname="sticky__nav__list__div__ch-logo" src={ch7} alt="root logo" height="30" width="30"></img>
                        <p className='ch_7'onClick={ ()=>{this.props.onRouteChange('chakras');this.props.mouseHover();}}>Chakras</p>
                    </div>
                </div>
        );
    }
}

export default StickyNav;