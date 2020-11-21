import React, { useEffect }  from 'react';
import GlobalStyle from './components/GlobalStyle'
import Nav from './components/Nav';
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import OurWork from './pages/OurWork'
import NotFound from './pages/NotFound'
import MovieDetail from './pages/MovieDetail'
import { Switch, Route, withRouter } from 'react-router-dom'

function App( {history} ) {
    console.log(React.version);
    useEffect( () => {
        console.log(history.location.pathname)
    }, [history.location.pathname])

    return (
        <div className="App">
            <GlobalStyle />
            <Nav />
            <Switch>
                <Route exact path="/" component={AboutUs} />
                <Route exact path="/work" component={OurWork} />
                <Route path="/work/:id" component={MovieDetail} />
                <Route path="/contact" component={ContactUs} />
                <Route component={NotFound} />
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

export default withRouter(App);
