import React from 'react';
import NavBar from '@components/layout/navigation/NavBar/NavBar';

import './Header.scss';

export class Header extends React.Component {
    render() {
        return (<>
        <header role="banner" id="header">
            <NavBar/>
        </header>         
        </>
        );
    }
}
