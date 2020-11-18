import React from 'react';
import GlobalStyle from './components/GlobalStyle'
import Nav from './components/Nav';
import Stylednav from './components/Nav'
import AboutUs from './pages/AboutUs'

function App() {
    console.log(React.version);
    
    return (
        <div className="App">
            <GlobalStyle />
            <Nav />
            <AboutUs />
        </div>
    );
}

export default App;
