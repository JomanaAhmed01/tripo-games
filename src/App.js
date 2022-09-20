import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import HeaderCompound from './compounds/HeaderCompound'
import GameCardsCompound from './compounds/GameCardsCompound'
import AboutCompound from './compounds/AboutCompound'
import ContactCompound from './compounds/ContactCompound'
import FooterCompound from './compounds/FooterCompound'
import KiponGameCompound from './compounds/KiponGameCompound'
import RobotrixGameCompound from './compounds/RobotrixGameCompound'
import TreasureBoxGameCompound from './compounds/TreasureBoxGameCompound'
import CareersCompound from './compounds/CareersCompound'
import AboutPageCompound from './compounds/AboutPageCompound'
import CommunityManagerCompound from './compounds/CommunityManagerCompound'
import QATesterCompound from './compounds/QATesterCompound'
import GameDesignerCompound from './compounds/GameDesignerCompound'
import GameDeveloperCompound from './compounds/GameDeveloperCompound'

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

        <Route path="/ContactCompound">
          <ContactCompound />
        </Route>

        <Route path="/CommunityManagerCompound">
          <CommunityManagerCompound />
        </Route>

        <Route path="/QATesterCompound">
          <QATesterCompound />
        </Route>

        <Route path="/GameDesignerCompound">
          <GameDesignerCompound />
        </Route>

        <Route path="/GameDeveloperCompound">
          <GameDeveloperCompound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
