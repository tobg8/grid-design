import React from 'react';
import './App.scss';

import Grid from '../Grid'
import SocialBar from '../SocialBar'
import Infos from '../Infos'
import ExpertsCompanies from '../ExpertsCompanies';
import Teachers from '../Teachers';

const App = () => {
  return (
    <div className="app">
      <main className="app__main">
        <Grid />
      </main>
        <SocialBar />
        <Infos />
        <ExpertsCompanies />
        <Teachers />
    </div>
  );
};

export default App;
