import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";

import { Link } from "react-router-dom";

import { PetLogo } from '../Utils/tools';

const Header = () => {
    return(
        <AppBar
            position="fixed"
            style={{
                backgroundColor:'#FFB7CE',
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
                <div style={{ flexGrow: 10 }} >
                    <Link>
                        <Button color="inherit" size="large">All About Pets</Button>
                    </Link>
                </div>
                {/* <div style={{ flexGrow: 1 }}>
                <Link to="/dogs">
                    <Button color="info" size="large">Dogs</Button>
                </Link>
                <Link to="/cats">
                    <Button color="info" size="large">Cats</Button>
                </Link>
                </div> */}

                <Link to="/sign_up">
                    <Button color="info" size="large">Sign Up</Button>
                </Link>
                <Link to="/log_in">
                    <Button color="info" size="large">Log In</Button>
                </Link>
            </Toolbar>
            <AppBar
                position="fixed"
                style={{
                    backgroundColor:'#FFFFFF',
                    boxShadow:'none',
                    margin: '100px 0',
                    borderBottom:'2px solid #00285e'
                }}    
            >
                <Toolbar style={{ display:'flex' }}>
                    <div style={{ flexGrow: 1 }}>
                        <Link>
                            <Button color="info" size="large">ADOPT OR GET INVOLVED</Button>
                        </Link>
                    </div>
                    <div style={{ flexGrow: 1 }}>
                        <Link>
                            <Button color="info" size="large">DOGS & PUPPIES</Button>
                        </Link>
                    </div>
                    <div style={{ flexGrow: 1 }}>
                        <Link>
                            <Button color="info" size="large">CATS & KITTENS</Button>
                        </Link>
                    </div>
                    <div style={{ flexGrow: 1 }}>
                        <Link>
                            <Button color="info" size="large">OTHER TYPES OF PETS</Button>
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
        </AppBar>
    )
}

export default Header;