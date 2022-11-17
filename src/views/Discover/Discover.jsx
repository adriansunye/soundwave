import React from 'react';
import {Main, Header }from '@components/layout/organization/';
import {Footer }from '@components/layout/navigation/Footer/Footer';

import './Discover.scss';

export default class Home extends React.Component {
    render() {
        return (<>
            <Header/>
            <Main id="discover"/>  
            <Footer/>
        </>
        );
    }
}