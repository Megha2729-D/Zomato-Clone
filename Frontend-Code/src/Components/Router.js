import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Homepage from './Homepage';
import Filterpage from './Filterpage';
import Detailspage from './Detailspage';
// import Details from './Details';
// import { GoogleOAuthProvider } from '@react-oauth/google';

function Router(){
    return(
        <BrowserRouter>
        {/* <GoogleOAuthProvider clientId="739425664927-gbvas4c4ko34rpl4g5m6hn78tte9khec.apps.googleusercontent.com"> */}
            <Route exact path='/' component={Homepage}/>
            <Route path='/filter' component={Filterpage} />
            <Route path='/details' component={Detailspage} />
            {/* </GoogleOAuthProvider> */}
        </BrowserRouter>
    );
}

export default Router;

