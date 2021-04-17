import react from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const GridDesktop = ({ scroll }) => {
  return (
    <div className="grid-container">
      <div className="desktop__cell desktop__cell--1">
        <p className="desktop__cell--1-paragraph">future london academy</p>
      </div>
      <div className="desktop__cell desktop__cell--2" />
      <div className="desktop__cell desktop__cell--3">
        ImAgIne you coUld learn from the leaderS at ApPle, Nike, Google, ViRgin, PentAgram All in One plAce?
        Some peoPle call it BauhAus 2.0. We cAll it Future London academy.
      </div>
      <div className="desktop__cell desktop__cell--4">
        <div className="desktop__cell--4-circle"></div>
      </div>
      <div className="desktop__cell desktop__cell--5" />
      <div className="desktop__cell desktop__cell--6" />
      <div className="desktop__cell desktop__cell--7">
        <p className="desktop__cell--7-paragraph">July 2020</p>
      </div>
      <div className="desktop__cell desktop__cell--8" />
      <div className="desktop__cell desktop__cell--10" />
      <div className="desktop__cell desktop__cell--11" />
      <div className="desktop__cell desktop__cell--12" />
      <div className="desktop__cell desktop__cell--13" />
      <div className="desktop__cell desktop__cell--14"/>
      <div className="desktop__cell desktop__cell--15">
        FInally, a busIneSs programme for desIgn leaders
      </div>
      <div className="desktop__cell desktop__cell--16" onClick={scroll}>
        Apply Now
      </div>
      <div className="desktop__cell desktop__cell--17">
        
      </div>
      <div className="desktop__cell desktop__cell--18">
        
      </div>
      <div className="desktop__cell desktop__cell--19">
        
      </div>
      <div className="desktop__cell desktop__cell--20">
      </div>
    </div>
  );
};


GridDesktop.propTypes = {
  scroll: PropTypes.func.isRequired,
};

export default GridDesktop
