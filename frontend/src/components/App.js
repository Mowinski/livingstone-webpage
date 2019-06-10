import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';
import Header from './Header';
import Navigation from "./Navigation";
import About from "./About";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Contact from "./Contact";
import appReducer from "../reducers";
import { getGalleryImages, getConstantText } from "../services";
import { SET_ABOUT_TEXT, SET_IMAGES, SET_CONTACT_TEXT } from "../actions";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookSquare, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

library.add(faFacebookSquare, faTwitter, faInstagram);


export const StateContext = React.createContext({});
const initialState = {
    'gallery_images': [],
    'about_text': '',
    'contact_text': '',
};

const App = () => {
    const [state, dispatch] = React.useReducer(appReducer, initialState);

    React.useEffect(() => {
        async function fetchGallery() {
            dispatch({'type': SET_IMAGES, 'payload': await getGalleryImages()});
        }
        async function fetchAboutText() {
            dispatch({'type': SET_ABOUT_TEXT, 'payload': await getConstantText('about')});
        }
        async function fetchContactText() {
            dispatch({'type': SET_CONTACT_TEXT, 'payload': await getConstantText('contact')});
        }
        fetchGallery();
        fetchAboutText();
        fetchContactText();
    }, []);

    return (
        <Router>
            <StateContext.Provider value={{state: state, dispatch: dispatch}}>
                <Header/>
                <Navigation/>

                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About}/>
                <Route exact path="/gallery" component={Gallery}/>
                <Route exect path="/contact" component={Contact}/>
                <Footer/>
            </StateContext.Provider>
        </Router>
    )
};


const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;