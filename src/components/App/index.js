import React, { useRef } from 'react';
import './App.scss';

import Grid from '../Grid'
import SocialBar from '../SocialBar'
import Infos from '../Infos'
import ExpertsCompanies from '../ExpertsCompanies';
import Teachers from '../Teachers';
import Diagram from '../Diagram';
import Price from '../Price';
import Form from '../Form';

const App = () => {
  const applyRef = useRef(null);
  const scroll = () => {
    applyRef.current.scrollIntoView({behavior: 'smooth'});
  }
  return (
    <div className="app">
      <main className="app__main">
        <Grid scroll={scroll}/>
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
        <Price />
        <Infos
          title="apply now"
          paragraph1="Leave your email to get more information and be updated when the application process starts. 
          The earlier you apply the better chance you will have to join us in 2021."
          paragraph2="If you have any questions, email ekaterina@futurelondonacademy.co.uk"
        />
        <Form applyRef={applyRef}/>
    </div>
  );
};

export default App;
