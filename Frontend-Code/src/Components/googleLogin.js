import React from 'react';
import { loadGapiInsideDOM } from 'gapi-script';
import { GoogleLogin } from '@react-oauth/google';



class Google extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signinModalOpen: false,
            signupModalOpen: false,
            username: undefined,
            isLoggedin: false,
            imageUrl: undefined,
            email: undefined,
            password: undefined,
            confirmPassword: undefined,
            openCart: false,
            handleEmptyCart: false,
            cartMenuitems: [],
            oldCartRestaurant: '',
            cartSubtotal: undefined,
            openOrder: false,
            orderData: [],
            orderRestaurant: {},
            orderSubtotal: undefined,
            signupError: "",
            loading: false,
            userAddress: {},
            date: '',
        }
    }
    componentDidMount = () => {
        //Get the login credentials from local storage
        let valueOfLocal = localStorage.getItem('loginData');
        let shouldLogin = localStorage.getItem('shouldLogin');
        // User order items when not logged in, Login modal will open
        if (shouldLogin) {
            localStorage.removeItem('shouldLogin');
            this.handleSignin();
        }
        valueOfLocal =
            JSON.parse(valueOfLocal);
        // If user already logged in get user credential from local storage and set state.
        if (valueOfLocal && valueOfLocal.username) {
            this.setState({ isLoggedin: true, username: valueOfLocal.username, imageUrl: valueOfLocal.imageUrl });
        }
        (async () => {
            await loadGapiInsideDOM();
        })()
    }
    responseGoogle = (response) => {
        console.log(response);
        this.setState({ username: response.profileObj.name, imageUrl: response.profileObj.imageUrl, signinModalOpen: false, loading: true });
        localStorage.setItem('loginData', JSON.stringify(this.state));
        window.location.reload();
    }
    handleSignin = () => {
        this.setState({ signinModalOpen: true });
    }
    render(){
    return (
        <GoogleLogin
            render={renderProps => (
                <button className="google-auth-button" onClick={renderProps.onClick} disabled={renderProps.disabled}><img src="https://colorlib.com/etc/lf/Login_v5/images/icons/icon-google.png" />Google</button>
            )}
            buttonText="Login"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
        // <GoogleLogin
        //     onSuccess={credentialResponse => {
        //       console.log(credentialResponse);
        //     }}
        //     onError={() => {
        //       console.log('Login Failed');
        //     }}
        //   />
    )
            }
}

export default Google;