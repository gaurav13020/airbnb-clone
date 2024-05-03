import React, { useState } from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Button } from "@material-ui/core";
import { useHistory } from 'react-router-dom';


function Header() {

    const history = useHistory();


    return (
        <div className="header">
            <Link to="/">
                <img className="header_icon" src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt="" />
            </Link>
            
            <div className="header_center">
                <input type="text" />
                <SearchIcon />
            </div>

            <div className="header_right">
                <Button className="loginButton"
                    onClick={() => history.push('/login')}
                    variant='outlined'>
                    Login
                </Button>

                
                <Button className="loginButton"
                    onClick={() => history.push('/submit-property')}
                    variant='outlined'>
                    Submit Property
                </Button>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>

        </div>
    )
}

export default Header;
