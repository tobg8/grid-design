import React from 'react';
import './App.scss';

import Grid from '../Grid'
import SocialBar from '../SocialBar'
import Infos from '../Infos'
import ExpertsCompanies from '../ExpertsCompanies';

const App = () => {
  return (
    <div className="app">
      <main className="app__main">
        <Grid />
      </main>
        <SocialBar />
        <Infos />
        <ExpertsCompanies />
        <div>Okkkkkkkkkkkkkk</div>
    </div>
  );
};

export default App;
