import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router
} from "react-router-dom";
import Footer from './layouts/footer';
import Header from './layouts/header';
import AboutUs from "./components/aboutUs";
import ContactUs from "./components/contactUs";
import Home from "./components/home";
import ComingSoon from "./components/pages/comingSoon";
import ScrollToTop from './components/scrollTop';
import Latest from './components/latest';
import Electrical from './components/electrical';
import Automation from './components/automation';
import SolarEPC from './components/solarEPC';

function App() {
  
  return (
    <Router>
      <ScrollToTop/>
      <Header/>
      <Switch>
              <Route
                exact
                path="/"
                component={Home}
              />
               <Route exact path="/home" component={Home} />
               <Route exact path="/about-us" component={AboutUs} />
               <Route exact path="/coming-soon" component={ComingSoon} />
               <Route exact path="/contact-us" component={ContactUs} />
               <Route exact path="/solar" component={SolarEPC} />
               <Route exact path="/automation" component={Automation} />
               <Route exact path="/electrical" component={Electrical} />
               <Route exact path="/latest" component={Latest} />
            </Switch>
      <Footer/>
  </Router>
  );
}
export default App;