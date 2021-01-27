import React from 'react'
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Container, Row, Col} from 'react-bootstrap'

import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';
import links from './data/links'



function App() {
  const routeMap = links.map((item, index) => (
    <Route 
      key = {index}
      exact = {item.isExact}
      path = {item.link}
      component = {item.component}
    
    />
  ))

  return (
    <Router>
      <NavBar />     
        
            <Switch>
              {routeMap}
             
            </Switch>
         
      <Footer />
    </Router>
  );
}

export default App;
