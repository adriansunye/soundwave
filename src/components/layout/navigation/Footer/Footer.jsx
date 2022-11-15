import React from 'react';
//import { Link } from 'react-router-dom';
import { ReactComponent as TwitterLogo } from '@assets/Global/twitter.svg';
import { ReactComponent as FacebookLogo } from '@assets/Global/facebook.svg';

import './Footer.scss';

export class Footer extends React.Component {
    render() {
        return <footer role="contentinfo" className="fixed-bottom d-flex flex-wrap justify-content-around align-items-center py-3" id="footer">
            <ul className="nav col-md-4 ps-auto ms-auto list-unstyled d-flex">
                <li className="ms-3">
                    About us
                </li>
                <li className="ms-3">
                    Contact
                </li>
            </ul>

            <ul className="nav col-md-4 list-unstyled me-auto d-flex justify-content-end ">
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
        </footer>
    }
}