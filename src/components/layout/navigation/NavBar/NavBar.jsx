import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as SoundwaveLogo } from '@assets/Global/soundwave-logo-text.svg';

import './NavBar.scss';

export default class NavBar extends React.Component {
    render() {

        return <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container-fluid">
                <Link to='/' className="navbar-brand nav-left"><SoundwaveLogo/></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarScroll">
                    <ul class="navbar-nav ms-auto ps-auto nav-right my-2 my-lg-0 navbar-nav-scroll">
                        <li class="nav-item">
                            <Link to='/discover' className="nav-link">Discover</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/join' className="nav-link">Join</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>;
    }
}