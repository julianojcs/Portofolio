import React from 'react';
import GlobalStyle from './components/GlobalStyle'
import Nav from './components/Nav';
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import OurWork from './pages/OurWork'
import { Switch, Route } from 'react-router-dom'

function App() {
    console.log(React.version);
    
    return (
        <div className="App">
            <GlobalStyle />
            <Nav />
            <Switch>
                <Route exact path="/" component={AboutUs} />
                <Route path="/work" component={OurWork} />
                <Route path="/contact" component={ContactUs} />
                {/* 
                <Route exact path="/" >
                    <AboutUs />
                </Route>
                <Route path="/work" >
                    <OurWork />
                </Route>
                <Route path="/contact" >
                    <ContactUs />
                </Route> 
                */}
            </Switch>
        </div>
    );
}

export default App;
