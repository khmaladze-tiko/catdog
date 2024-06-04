import React from "react";
import { Toolbar, Button } from "@mui/material";

import { Link } from "react-router-dom";
import { PetLogo } from "../Utils/tools";


const Footer = () => {
    return(
        <footer className="bck_babyPink">
            <div className="footer_logo">
                <PetLogo
                    link={true}
                    linkTo={"/"}
                    width="70px"
                    height="70px"
                />
            </div>
            <div>
            <Toolbar style={{ display:'flex', textAlign: "start"}}>
                    <div style={{ flexGrow: 1, paddingTop:"30px", width: "260px", height:"330px" }}>
                        <Link style={{display: "block"}}>
                            <Button color="info" size="large">RESOURCES</Button>
                        </Link>
                        <div style={{ padding: "20px 0", textAlign: "left"}}>
                            <Link style={{display: "block"}}>
                                <Button color="inherit" size="small">FAQs</Button>
                            </Link>
                            <Link style={{display: "block"}}>
                                <Button color="inherit" size="small">Mobile App Download</Button>
                            </Link>
                            <Link style={{display: "block"}}>
                                <Button color="inherit" size="small">Partnerships</Button>
                            </Link>
                            <Link style={{display: "block"}}>
                                <Button color="inherit" size="small">News Center</Button>
                            </Link>
                            <Link style={{display: "block"}}>
                                <Button color="inherit" size="small">Put Petfinder On Your Site</Button>
                            </Link>
                            <Link style={{display: "block"}}>
                                <Button color="inherit" size="small">For Developers</Button>
                            </Link>
                            <Link style={{display: "block"}}>
                                <Button color="inherit" size="small">Contact Us</Button>
                            </Link>

                        </div>
                        
                        
                    </div>
                    <div style={{ flexGrow: 1, paddingTop:"30px", width: "260px", height:"330px" }}>
                        <Link>
                            <Button color="info" size="large">ADOPT OR GET INVOLVED</Button>
                        </Link>
                        <div style={{ padding: "20px 0", textAlign: "left"}}>
                            <Link style={{display: "block"}}>
                                <Button color="inherit" size="small">All Adopt or Get Involved</Button>
                            </Link>
                            <Link style={{display: "block"}}>
                                <Button color="inherit" size="small">Adopting Pets</Button>
                            </Link>
                            <Link style={{display: "block"}}>
                                <Button color="inherit" size="small">Animal Shelters & Rescues</Button>
                            </Link>
                            <Link style={{display: "block"}}>
                                <Button color="inherit" size="small">Other Types of Pets</Button>
                            </Link>
                        </div>
                    </div>
                    <div style={{ flexGrow: 1, paddingTop:"30px", width: "260px", height:"330px" }}>
                        <Link>
                            <Button color="info" size="large">ABOUT DOGS & PUPPIES</Button>
                        </Link>
                        <div style={{ padding: "20px 0", textAlign: "left"}}>
                            <Link style={{display: "block"}}>
                                <Button color="inherit" size="small">All About Dogs & Puppies</Button>
                            </Link>
                            <Link style={{display: "block"}}>
                                <Button color="inherit" size="small">Dog Adoption</Button>
                            </Link>
                            <Link style={{display: "block"}}>
                                <Button color="inherit" size="small">Dog Breeds</Button>
                            </Link>
                            <Link style={{display: "block"}}>
                                <Button color="inherit" size="small">Feeding Your Dog</Button>
                            </Link>
                            <Link style={{display: "block"}}>
                                <Button color="inherit" size="small">Dog Behavior</Button>
                            </Link>
                            <Link style={{display: "block"}}>
                                <Button color="inherit" size="small">Dog Health & Wellness</Button>
                            </Link>
                            <Link style={{display: "block"}}>
                                <Button color="inherit" size="small">Dog Training</Button>
                            </Link>
                            <Link style={{display: "block"}}>
                                <Button color="inherit" size="small">Other Dog Information</Button>
                            </Link>
                        </div>
                    </div>
                    <div style={{ flexGrow: 1, paddingTop:"30px", width: "260px", height:"330px" }}>
                        <Link>
                            <Button color="info" size="large">OTHER TYPES OF PETS</Button>
                        </Link>
                        <div style={{ padding: "20px 0", textAlign: "left"}}>
                            <Link style={{display: "block"}}>
                                <Button color="inherit" size="small">All About Cats & Kittens</Button>
                            </Link>
                            <Link style={{display: "block"}}>
                                <Button color="inherit" size="small">Cat Adoption</Button>
                            </Link>
                            <Link style={{display: "block"}}>
                                <Button color="inherit" size="small">Cat Breeds</Button>
                            </Link>
                            <Link style={{display: "block"}}>
                                <Button color="inherit" size="small">Feeding Your Cat</Button>
                            </Link>
                            <Link style={{display: "block"}}>
                                <Button color="inherit" size="small">Cat Behavior</Button>
                            </Link>
                            <Link style={{display: "block"}}>
                                <Button color="inherit" size="small">Cat Health & Wellness</Button>
                            </Link>
                            <Link style={{display: "block"}}>
                                <Button color="inherit" size="small">Cat Training</Button>
                            </Link>
                            <Link style={{display: "block"}}>
                                <Button color="inherit" size="small">Other Cat Information</Button>
                            </Link>
                        </div>
                    </div>
                </Toolbar>
                <Toolbar>
                    <div style={{ flexGrow: 1 }}>
                            <Link>
                                <Button color="inherit" style={{fontSize: "10px"}}>Shelter & Rescue Registration</Button>
                            </Link>
                    </div>
                    <div>
                        <p>|</p>
                    </div>
                    <div style={{ flexGrow: 1 }}>
                            <Link >
                                <Button color="inherit" style={{fontSize: "10px"}}>Sitemap</Button>
                            </Link>
                    </div>
                    <div>
                        <p>|</p>
                    </div>
                    <div style={{ flexGrow: 1 }}>
                            <Link >
                                <Button color="inherit" style={{fontSize: "10px"}}>Terms of Service</Button>
                            </Link>
                    </div>
                    <div>
                        <p>|</p>
                    </div>
                    <div style={{ flexGrow: 1 }}>
                            <Link >
                                <Button color="inherit" style={{fontSize: "10px"}}>Notice at Collection</Button>
                            </Link>
                    </div>
                    <div>
                        <p>|</p>
                    </div>
                    <div style={{ flexGrow: 1 }}>
                            <Link >
                                <Button color="inherit" style={{fontSize: "10px"}}>Privacy Policy (updated)</Button>
                            </Link>
                    </div>
                    <div>
                        <p>|</p>
                    </div>
                    <div style={{ flexGrow: 1 }}>
                            <Link >
                                <Button color="inherit" style={{fontSize: "10px"}}>Do Not Sell Or Share My Personal Information</Button>
                            </Link>
                    </div>
                    <div>
                        <p>|</p>
                    </div>
                </Toolbar>
            </div>
        </footer>
    )
}

export default Footer;