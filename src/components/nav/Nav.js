import React, { Component } from 'react';
import './Nav.css'
import navigator from './navigator.png'
import MainNav from './MainNav/MainNav';
import StickyNav from './StickyNav/StickyNav';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
          isHovering: false,
        };
    }

    handleMouseHover() {
        this.setState(this.toggleHoverState);
      }
    
    toggleHoverState(state) {
        return {
            isHovering: !state.isHovering,
        };
    }

    render(){
        return(
            <nav className="header__nav">
                <MainNav onRouteChange={this.props.onRouteChange}/>
                <div className="header__nav_icon">
                        <div className="header__nav_icon--menu">
                            <img alt ='meditating nav logo' src={navigator}
                            onClick={this.handleMouseHover}>
                            </img>
                        </div>
                        {
                            this.state.isHovering &&
                            <StickyNav mouseHover={this.handleMouseHover} onRouteChange={this.props.onRouteChange}/>
                        }
                </div>
        </nav>
        );
    }
}

export default Nav;