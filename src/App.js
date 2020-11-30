import React, { useEffect }  from 'react';
import GlobalStyle from './components/GlobalStyle'
import Nav from './components/Nav';
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import OurWork from './pages/OurWork'
import NotFound from './pages/NotFound'
import MovieDetail from './pages/MovieDetail'
import { Switch, Route, withRouter } from 'react-router-dom'
// import { useLocation } from 'react-router-dom'
//Animation
import { AnimatePresence } from 'framer-motion'
// import ScrollTop from './components/ScrollTop'

function App( {history} ) {
    // const location = useLocation()
    const location = history.location
    console.log(React.version)

    //ScrollTop
    useEffect( () => {
        console.log(history.location.pathname)
        window.scroll({
            top: 0,
            left: 0
        })
    }, [location])

    return (
        <div className="App">
            <GlobalStyle />
            {/* <ScrollTop /> */}
            <Nav />
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
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
            </AnimatePresence>
        </div>
    );
}

export default withRouter(App);
