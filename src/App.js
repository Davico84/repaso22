import { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import CharacterList from './Components/CharacterList/CharacterList';
import CharacterProfile from './Components/CharacterProfile/CharacterProfile';
import Favorites from './Components/Favorites/Favorites';
import Navbar from './Components/Navbar/Navbar';
import Search from './Components/Search/Search';

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);

  const onSearch = (result)=>{
    // console.log("RESULT", [...characterList, result]);
    setCharacterList(result);
  }

  const addToFavorites = (char) =>{
    setFavoriteList([...favoriteList, char]);
  }

  const rmFromFavorites = (url)=>{
    setFavoriteList(favoriteList.filter(char=>char.url !== url));
  }


  return (
    <div className="App">
      <Navbar />
      {/* Home */}
      <Route exact path='/' >
        <Search onSearch={onSearch}/>
        {characterList.length !== 0 && <CharacterList characterList={characterList} addToFavorites={addToFavorites} />}
      </Route>

      {/* FAVORITES */}
      <Route path='/favorites' >
        <Favorites favoriteList={favoriteList} rmFromFavorites={rmFromFavorites} />
      </Route>

      {/* CHARACTER PROFILE */}
      <Route path='/character/:charId' >
        <CharacterProfile />
      </Route>

      
    </div>
  );
}

export default App;
