import './App.css';
import HeaderCompound from './compounds/HeaderCompound';
import GameCardsCompound from './compounds/GameCardsCompound';
import AboutCompound from './compounds/AboutCompound';
import ContactCompound from './compounds/ContactCompound';
import FooterCompound from './compounds/FooterCompound';
import GamesCompound from './compounds/GamesCompound'

function App() {
  return (
    <div className="App">
      {/* <HeaderCompound />
      <GameCardsCompound />
      <AboutCompound />
      <ContactCompound />
      <FooterCompound /> */}
      <GamesCompound />
    </div>
  );
}

export default App;
