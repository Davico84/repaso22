import { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import CharacterList from './Components/CharacterList/CharacterList';
import CharacterProfile from './Components/CharacterProfile/CharacterProfile';
import Navbar from './Components/Navbar/Navbar';
import Search from './Components/Search/Search';

function App() {
  const [characterList, setCharacterList] = useState([]);

  const onSearch = (result)=>{
    setCharacterList(result);
  }

  return (
    <div className="App">
      <Navbar />
      {/* Home */}
      <Route exact path='/' >
        <Search onSearch={onSearch}/>
      </Route>
      {/* CHARACTER PROFILE */}
      <Route path='/character/:charId' >
        <CharacterProfile />
      </Route>

      {characterList.length !== 0 && <CharacterList characterList={characterList} />}
    </div>
  );
}

export default App;
