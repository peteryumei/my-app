import React from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Header from "./components/common/header";
import Home from "./components/home/react-home";
import ReactModal from "./components/demos/react-modal";
import ReactBootstrapModal from "./components/demos/react-bootstrap-modal";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
      <Header />
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/react-modal" component={ReactModal} />
          <Route path="/react-bootstrap-modal" component={ReactBootstrapModal} />/>
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
