import './App.css';
import React from 'react'
import {BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import CreatePokemon from './components/CreatePokemon/CreatePokemon';
import PokemonEdit from './components/EditPokemon/PokemonEdit';
import Favorites from './components/Favorite/Favorite';
import Error from './components/Error/Error';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Route exact path= "/" component={LandingPage}></Route>
    <Route path= "/home" component={Home}></Route>
    <Route path="/Detail/:id" component={Detail}></Route>
    <Route path= "/CreatePokemon" component={CreatePokemon}></Route>
    <Route path= "/PokemonEdit/:id" component={PokemonEdit}></Route>
    <Route path= "/Favorites" component={Favorites}></Route>
    <Route path='*' component={Error}></Route>
    </div>
    </BrowserRouter>
  );
}

export default App;
