import React from 'react';
import GlobalStyle from './components/GlobalStyle'
import Nav from './components/Nav';
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/CantactUs'
import OurWork from './pages/OurWork'
import { Switch, Route } from 'react-router-dom'

function App() {
    console.log(React.version);
    
    return (
        <div className="App">
            <GlobalStyle />
            <Nav />
            <Route exact path="/" >
                <AboutUs />
            </Route>
            <Route path="/work" >
                <OurWork />
            </Route>
            <Route path="/contact" >
                <ContactUs />
            </Route>
        </div>
    );
}

export default App;
