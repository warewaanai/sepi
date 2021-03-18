import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import './stylesheet.scss'

import Logo from '../../logo.jpg'

import MenuIcon from './menuIcon.png'

const Menu = props => {
    const [open, setOpen] = useState(0);

    const toggleMenu = () => {
        props.dispatch({
            type: 'MENU_TOGGLE'
        });
    }

    const shutMenu = () => {
        props.dispatch({
            type: 'MENU_TURN_OFF'
        });
    }

    return <>
        <div id="Menu">
            <div id="logo">
                <Link to="/" onClick={shutMenu} style={{color: "black", textDecoration: "none"}}> <img alt="logo SEPI" src={Logo} height="64px"/> </Link>
            </div>
            <div id="Nume">
                <Link to="/" onClick={shutMenu} style={{color: "black", textDecoration: "none"}}><span style={{fontSize: "24px"}}>Societatea pentru Excelență și Performanță în Informatică </span> </Link>
            </div>
            <div id="Menus">
                <img id="MenuButton" alt="Menu Button" src={MenuIcon} onClick={toggleMenu} />
            </div>
        </div>
        <div id="NavMenu" className={props.menuOn ? "NavMenuOpened" : "NavMenuClosed"}>
            <br/> <br/>
            <Link to="/" onClick={toggleMenu}> <span className="MenuLink">SEPI</span> </Link> <br/> <br/>

            <Link to="/osepi" onClick={toggleMenu}> <span className="MenuLink">OSEPI</span> </Link> <br/> <br/>
            <div style={{marginLeft: "20px"}}>
                &gt; <Link to="/osepi" onClick={toggleMenu}><span className="MenuLink">Anunțuri</span></Link> <br/> <br/>
                &gt; <Link to="/osepi/inscriere" onClick={toggleMenu}><span className="MenuLink">Înscriere</span></Link> <br/> <br/>
                &gt; <a target="_blank" href={`${window.HOST}/static/regulament.pdf`} onClick={toggleMenu}><span className="MenuLink">Regulament</span></a> <br/> <br/>
                &gt; <a target="_blank" href={`${window.HOST}/static/participanti_final.pdf`} onClick={toggleMenu}><span className="MenuLink">Participanți</span></a> <br/> <br/>
                &gt; <Link to="/rezultate" onClick={toggleMenu}><span className="MenuLink">Rezultate</span></Link> <br/> <br/>
                &gt; <Link to="/calificati" onClick={toggleMenu}><span className="MenuLink">Calificați națională</span></Link> <br/> <br/>
            </div>
        
            <a target="_blank" href="https://infopro.lrmd.ro" onClick={toggleMenu}> <span className="MenuLink">InfoPro</span> </a> <br/> <br/>

            <Link to="/membri" onClick={toggleMenu}> <span className="MenuLink">Membri</span> </Link> <br/> <br/>

            <a href={`${window.HOST}/static/STATUTUL%20SEPI.pdf`} onClick={toggleMenu}> <span className="MenuLink">Statutul SEPI</span> </a> <br/> <br/>

            <Link to="/contact" onClick={toggleMenu}> <span className="MenuLink">Contact</span> </Link> <br/> <br/>
        </div>
    </>;
};

const mapStateToProps = state => {
    return {
        menuOn: state.menuOn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);

