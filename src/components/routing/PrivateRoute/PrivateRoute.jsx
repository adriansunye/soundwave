import React from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Home from '@views/Home/Home';
import Discover from '@views/Discover/Discover';
import Join from '@views/Join/JoinPage/JoinPage';
import ErrorPage from '@views/ErrorPage/ErrorPage';

export default class PrivateRoute extends React.Component {
    render() {
      return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/discover" element={<Discover/>}/>
                <Route exact path="/join" element={<Join/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </Router>
      );
    }
  }
