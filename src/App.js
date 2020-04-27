import React from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import Home from './components/Home';
import SearchResult from './components/SearchResult';
import ProductPage from './components/ProductPage';
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
                    <Route path="/:department/search" component={SearchResult} />
                    <Route path="/:department/:category1/search" component={SearchResult} />
                    <Route path="/:department/:category1/:category:2/search" component={SearchResult} />
                    <Route path="/:slug/p" component={ProductPage} />
                    <Route path="/cart" component={Cart} />
                </Switch>
        </ BrowserRouter>
              
    </div>
  );
}

export default App;
