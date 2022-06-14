import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from './Button';


class Header extends Component {
    render() {
        return (
            <>
                <header>
                    <div className="title-container">

                        <div className="icon-container">
                            <i class="fa-solid fa-bars"></i>
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/The_New_York_Times_logo.png/800px-The_New_York_Times_logo.png"/>
                        <div className="btn-container">
                            <Button title="subscribe for $0.50 (CDN)/WEEK" />
                            <Button title="Log in" />
                        </div>
                        <i class="fa-solid fa-user user-icon"></i>
                    </div>
    
                </header>
                <nav>
                    <ul>
                        <li>Jan. 6 House Committee Hearings &gt; </li>
                        <li><span>LIVE</span> Updates</li>
                        <li>Second Hearing's Focus</li>
                        <li>Names to Know</li>
                    </ul>
                </nav>
            </>
        );
    }
}

export default Header;

