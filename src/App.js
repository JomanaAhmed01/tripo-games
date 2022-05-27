import './App.css';
import HeaderCompound from './compounds/HeaderCompound';
import GameCardsCompound from './compounds/GameCardsCompound';
import AboutCompound from './compounds/AboutCompound'

function App() {
  return (
    <div className="App">
      <HeaderCompound />
      <GameCardsCompound />
      <AboutCompound />
    </div>
  );
}

export default App;
