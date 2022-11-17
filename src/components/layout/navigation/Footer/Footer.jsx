import React from 'react';
//import { Link } from 'react-router-dom';
import { ReactComponent as TwitterLogo } from '@assets/Global/twitter.svg';
import { ReactComponent as FacebookLogo } from '@assets/Global/facebook.svg';

import './Footer.scss';

export class Footer extends React.Component {
    render() {
        return <footer role="contentinfo" className="fixed-bottom d-flex d-none d-md-block align-items-center " id="footer">
            <ul className="col-md-6 list-unstyled d-flex container me-auto mt-3 justify-content-start">
                <li className="ms-3">
                    About us
                </li>
                <li className="ms-3">
                    Contact
                </li>
                <ul className="col-md-6 list-unstyled me-auto d-flex justify-content-end container">
                    <li className="ms-3">
                        <a href="https://www.twitter.com">
                            <div className="d-flex flex-row">
                                <TwitterLogo />
                                <p>Twitter</p>
                            </div>
                        </a>
                    </li>
                    <li className="ms-3">
                        <a href="https://www.facebook.com">
                            <div className="d-flex flex-row">
                                <FacebookLogo />
                                <p>Facebook</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </ul>
        </footer>
    }
}