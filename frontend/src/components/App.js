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
import { getGalleryImages, getConstantText, getTeamMembers, getWeapons } from "../services";
import {SET_ABOUT, SET_IMAGES, SET_CONTACT, SET_TEAM_MEMBERS, SET_WEAPONS} from "../actions";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookSquare, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Team from "./Team";

library.add(faFacebookSquare, faTwitter, faInstagram);


export const StateContext = React.createContext({});
const initialState = {
    'gallery_images': [],
    'team_members': [],
    'weapons': [],
    'about_text': '',
    'about_image': '',
    'contact_text': '',
    'contact_image': '',
};

const App = () => {
    const [state, dispatch] = React.useReducer(appReducer, initialState);

    React.useEffect(() => {
        async function fetchGallery() {
            dispatch({'type': SET_IMAGES, 'payload': await getGalleryImages()});
        }
        async function fetchAboutText() {
            dispatch({'type': SET_ABOUT, 'payload': await getConstantText('about')});
        }
        async function fetchContactText() {
            dispatch({'type': SET_CONTACT, 'payload': await getConstantText('contact')});
        }
        async function fetchTeamMember() {
            dispatch({'type': SET_TEAM_MEMBERS, 'payload': await getTeamMembers()});
        }
        async function fetchWeapons() {
            dispatch({'type': SET_WEAPONS, 'payload': await getWeapons()});
        }
        fetchGallery();
        fetchAboutText();
        fetchContactText();
        fetchTeamMember();
        fetchWeapons();
    }, []);

    return (
        <Router>
            <StateContext.Provider value={{state: state, dispatch: dispatch}}>
                <Header/>
                <Navigation/>

                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About}/>
                <Route exact path="/gallery" component={Gallery}/>
                <Route exact path="/team" component={Team}/>
                <Route exect path="/contact" component={Contact}/>
                <Footer/>
            </StateContext.Provider>
        </Router>
    )
};


const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;