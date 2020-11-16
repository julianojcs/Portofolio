import React from 'react';
import GlobalStyle from './components/GlobalStyle'
import AboutUs from './pages/AboutUs'

function App() {
    console.log(React.version);
    
    return (
        <div className="App">
            <GlobalStyle />
            <AboutUs />
        </div>
    );
}

export default App;
