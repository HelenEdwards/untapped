import React from 'react';
import {
    Route,
    Routes,
    Redirect,
    Switch,
    Link,
    HashRouter as Router
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


import SignUpFormContainer from './session/signup_form_container';
import LogInFormContainer from './session/login_form_container';
import HeroContainer from './hero/hero_container';
import ReviewIndexContainer from './reviews/review_index_container';
import Navbar from './navbar/navbar_container';
import Footer from './footer';

const mSTP = ({ session, users }) => {
    return { currentUser: users[session.id] }
}



const App = (props) => (
    <div> 
        <header>
            <Navbar />
        </header>
        <ProtectedRoute exact path="/reviews_index" component={ReviewIndexContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <Route exact path="/" component={HeroContainer} /> 
        <footer>
            <Footer />
        </footer>
    </div>
);

export default App;
    