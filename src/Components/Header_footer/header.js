import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";

import { Link } from "react-router-dom";

import { PetLogo } from '../Utils/tools';

const Header = () => {
    return(
        <AppBar
            position="fixed"
            style={{
                backgroundColor:'#FFA400',
                boxShadow:'none',
                padding:'10px 0',
                borderBottom:'2px solid #00285e'
            }}    
        >
            <Toolbar style={{ display:'flex' }}>
                <div style={{ flexGrow: 1 }}>
                    <div className="header_logo">
                        <PetLogo
                            link={true}
                            linkTo={'/'}
                            width="70px"
                            height="70px"
                        />
                    </div>
                </div>

                <div style={{ flexGrow: 1 }}>
                <Link to="/dogs">
                    <Button color="info" size="large">Dogs</Button>
                </Link>
                <Link to="/cats">
                    <Button color="info" size="large">Cats</Button>
                </Link>
                </div>

               
                <Link to="/sign_in">
                    <Button color="info" size="large">Sign In</Button>
                </Link>
            </Toolbar>
            header
        </AppBar>
    )
}

export default Header;