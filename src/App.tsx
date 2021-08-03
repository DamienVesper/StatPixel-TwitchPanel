import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import '../public/assets/scss/index.scss';
import 'bootstrap';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';

import Error404 from './pages/404';
import Dashboard from './pages/Dashboard';

/**
 * The application layout.
 */
class App extends React.Component {
    render = () => (
        <div id="app" className="text-light">
            <Header />
            <Router>
                <Switch>
                    {/* Landing Page */}
                    <Route exact path="/">
                        <Home />
                    </Route>

                    {/* Dashboard */}
                    <Route exact path="/dashboard">
                        <Dashboard />
                    </Route>

                    {/* 404 Handler */}
                    <Route path="/">
                        <Error404 />
                    </Route>
                </Switch>
            </Router>
            <Footer />
        </div>
    );
}

export default App;
