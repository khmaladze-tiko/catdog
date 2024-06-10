import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Header from "./Components/Header_footer/header";
import Footer from "./Components/Header_footer/footer";
import Home from "./Components/Home";

import LogIn from "./Components/logIn";

const Routes = () => {
  return (
    <BrowserRouter>
     <Header/>
     <Switch>
        <Route path="/log_in" exact component={LogIn} />
        <Route path="/" exact component={Home} />
     </Switch>
     <Footer/>
    </BrowserRouter>
  );
}

export default Routes;
