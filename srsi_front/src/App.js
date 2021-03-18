import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import DesprePage from './pages/Despre'
import MembriPage from './pages/Membri'
import MemberPage from './pages/MemberPage'
import InscriereOSEPI from './pages/OSEPI/Inscriere'
import ContactPage from './pages/Contact'
import OSEPI from './pages/OSEPI'
import RezultatePage from './pages/Rezultate'
import Menu from './components/menu'

import './App.scss'
import CalificatiPage from './pages/Calificati';

const App = props => {
    return <>
        <Router>
            <Menu />
            <div id="hiderLeft"></div>
            <div id="hiderRight"></div>
            <div id="main">
                <div id="middler">
                    <Switch>
                        <Route exact path="/" component={DesprePage}/>
                        <Route exact path="/contact" component={ContactPage}/>
                        <Route exact path="/osepi" component={OSEPI}/>
                        <Route exact path="/osepi/inscriere" component={InscriereOSEPI}/>
                        <Route exact path="/membri" component={MembriPage}/>
                        <Route exact path="/membri/:name" component={MemberPage}/>
                        <Route exact path="/rezultate" component={RezultatePage}/>
                        <Route exact path="/calificati" component={CalificatiPage}/>
                    </Switch>
                </div>
            </div>
        </Router>
    </>
}

export default App;
