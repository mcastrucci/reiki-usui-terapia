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
                <MainNav/>
                <div className="header__nav_icon">
                        <img src={navigator}
                        onClick={this.handleMouseHover}>
                        </img>
                        {
                            this.state.isHovering &&
                            <StickyNav/>
                        }
                </div>
        </nav>
        );
    }
}

export default Nav;