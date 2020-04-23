import React from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import Home from './components/Home';
import Search from './components/Search';
import PDP from './components/PDP';
import Cart from './components/Cart';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">


        <Header></Header>

       
        <BrowserRouter>
                <Switch>
                    <Route path="/" exact={true} component={Home} />
                    <Route path="/search" component={Search} />
                    <Route path="/:slug/p" component={PDP} />
                    <Route path="/cart" component={Cart} />
                </Switch>
        </ BrowserRouter>
              
    </div>
  );
}

export default App;
