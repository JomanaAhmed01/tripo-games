import './App.css';
import HeaderCompound from './compounds/HeaderCompound';
import GameCardsCompound from './compounds/GameCardsCompound';
import AboutCompound from './compounds/AboutCompound';
import ContactCompound from './compounds/ContactCompound'

function App() {
  return (
    <div className="App">
      <HeaderCompound />
      <GameCardsCompound />
      <AboutCompound />
      <ContactCompound />
    </div>
  );
}

export default App;
