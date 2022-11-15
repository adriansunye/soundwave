import React from 'react';
import {Main, Header }from '@components/layout/organization/';
import {Footer}from '@components/layout/navigation/Footer/Footer';

import './JoinPage.scss';

export default class JoinPage extends React.Component {
    render() {
        return (<>
            <Header/>
            <Main id="join"/> 
            <Footer/>
        </>
        );
    }
}