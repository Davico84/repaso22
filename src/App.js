import { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import CharacterList from './Components/CharacterList/CharacterList';
import CharacterProfile from './Components/CharacterProfile/CharacterProfile';
import Favorites from './Components/Favorites/Favorites';
import Navbar from './Components/Navbar/Navbar';
import Search from './Components/Search/Search';
import { useSelector } from 'react-redux'

function App() {
  const charListState = useSelector(state => state.characterList);

  return (
    <div className="App">
      <Navbar />
      {/* Home */}
      <Route exact path='/' >
        <Search />
        {charListState.length !== 0 && <CharacterList />}
      </Route>

      {/* FAVORITES */}
      <Route path='/favorites' >
        <Favorites />
      </Route>

      {/* CHARACTER PROFILE */}
      <Route path='/character/:charId' >
        <CharacterProfile />
      </Route>

      
    </div>
  );
}

export default App;
