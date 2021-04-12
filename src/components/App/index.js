import React from 'react';
import './App.scss';

import Grid from '../Grid'
import SocialBar from '../SocialBar'
import Infos from '../Infos'
import ExpertsCompanies from '../ExpertsCompanies';
import Teachers from '../Teachers';
import Diagram from '../Diagram';

const App = () => {
  return (
    <div className="app">
      <main className="app__main">
        <Grid />
      </main>
        <SocialBar />
        <Infos 
          paragraph1="An executive programme broken down into 5 intense 2-week modules in London and California"
          paragraph2="Forget boring professors and outdated business knowledge. 
          You will be taught by CEOs, CTOs and Heads of Design from the top businesses, startups and products companies."
          title="What is it"
        />
        <ExpertsCompanies />
        <Teachers />
        <Infos 
          paragraph1="This programme is specially designed for creative leaders with 15+ years of experience. 
          These are usually CEOs, Creative Directors, Design Directors, Heads of UX, Product Owners and Innovation Managers 
          who want to be better leaders and take their career to a new level."
          paragraph2="There are only 20 people in the first cohort. The earlier you apply the better chance you will have to join us in 2021. "
          title="who is it for"
        />
        <Diagram />
    </div>
  );
};

export default App;
