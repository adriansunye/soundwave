import React from 'react';
import {Main, Header }from '@components/layout/organization/';

import './Home.scss';

export default class Home extends React.Component {
    render() {
        return (<>
            <Header/>
            <Main id="home"/>          
        </>
        );
    }
}
