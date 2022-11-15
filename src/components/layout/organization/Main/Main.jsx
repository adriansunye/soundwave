import React from 'react';
import LandingGirl from '@assets/Home/landing-page-girl.png';
import Covers from '@assets/Discover/covers.jpg';
import { ReactComponent as AlbumsLogo } from '@assets/Discover/albums.svg';
import { ReactComponent as MicrophoneLogo } from '@assets/Discover/microphone.svg';
import { ReactComponent as MoreLogo } from '@assets/Discover/more.svg';
//import Button from 'react-bootstrap/Button';
//import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import JoinForm from '@views/Join/JoinForm/JoinForm';

import './Main.scss';


export class Main extends React.Component {
    /* joinButton() {
        let history = useHistory();
        function handleClick() {
        history.push("/join");
        }
    }*/


    renderSwitch(params) {
        switch (params.id) {
            case "home":
                return <>
                    <div className="col-md-6 mt-5">
                        <img src={LandingGirl} alt="Girl listening to music" className="img-fluid"></img>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center flex-column gap-3">
                        <h1>Feel The Music</h1>
                        <h2>Stream Over 2 Million songs with one click</h2>
                        <div className="mt-3">
                            <Link className="btn btn-primary" role="button" to="/join">Join Now</Link>
                            {/* <Button variant="primary">Join Now</Button> */}
                        </div>
                    </div>
                </>
            case "discover":
                return <>
                    <div className="col-md-6 d-flex justify-content-center flex-column gap-3">
                        <h1>Discover new music</h1>
                        <div className="d-flex flex-row">
                            <div className="p-2 bd-highlight">
                                <div className="d-flex flex-column">
                                    <MicrophoneLogo />
                                    <p>Charts</p>
                                </div>
                            </div>
                            <div className="p-2 bd-highlight">
                                <div className="d-flex flex-column">
                                    <AlbumsLogo />
                                    <p>Albums</p>
                                </div>
                            </div>
                            <div className="p-2 bd-highlight">
                                <div className="d-flex flex-column">
                                    <MoreLogo />
                                    <p>More</p>
                                </div>
                            </div>
                        </div>
                        <h4>By joining you can benefit by listening to the latest albums realesed.</h4>
                    </div>
                    <div className="col-md-6 mt-5">
                        <img src={Covers} alt="Four albums" className="img-fluid"></img>
                    </div>
                </>
            case "join":
                return <>
                    <div className="col-md-6 d-flex justify-content-center flex-column gap-3">
                        <h1 className="title-join">Join the <span>fun.</span></h1>
                    </div>
                    <div className="col-md-6">
                        <JoinForm />
                    </div>
                </>
            default:
                console.log("not defined")
                break;
        }
    }


    render() {
        return (<>
            <main role="main" id="content">
                <div class="container">
                    <div class="row">
                        {this.renderSwitch(this.props)}
                    </div>
                </div>
            </main>
        </>
        );
    }
}
