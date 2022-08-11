import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import HeaderCompound from './compounds/HeaderCompound';
import GameCardsCompound from './compounds/GameCardsCompound';
import AboutCompound from './compounds/AboutCompound';
import ContactCompound from './compounds/ContactCompound';
import FooterCompound from './compounds/FooterCompound';
import KiponGameCompound from './compounds/KiponGameCompound'
import RobotrixGameCompound from './compounds/RobotrixGameCompound'
import TreasureBoxGameCompound from './compounds/TreasureBoxGameCompound'
import CareersCompound from './compounds/CareersCompound'
import AboutPageCompound from './compounds/AboutPageCompound'
import CommunityManagerCompound from './compounds/CommunityManagerCompound'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HeaderCompound />
          <GameCardsCompound />
          <AboutCompound />
          <ContactCompound />
          <FooterCompound />
        </Route>

        <Route path="/KiponGameCompound">
          <KiponGameCompound />
        </Route>

        <Route path="/RobotrixGameCompound">
          <RobotrixGameCompound />
        </Route>

        <Route path="/TreasureBoxGameCompound">
          <TreasureBoxGameCompound />
        </Route>

        <Route path="/CareersCompound">
          <CareersCompound />
        </Route>

        <Route path="/AboutPageCompound">
          <AboutPageCompound />
        </Route>

        <Route path="/CommunityManagerCompound">
          <CommunityManagerCompound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
