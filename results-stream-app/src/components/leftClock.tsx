import React  from 'react';
import { pad } from '../util/printTime';
import { useClock } from './clockContext';

const LeftClock: React.FunctionComponent = () => {

  const {stopped_l,totaltime_l} = useClock();

  if(!stopped_l || !totaltime_l){
    return null;
  }
  
  let fractions : number = 0;
  let sec : number = 0;
  let min: number = 0;
  if(stopped_l != 0 && stopped_l < totaltime_l){
    fractions = Math.floor(stopped_l / 10) % 100;
    sec = Math.floor(stopped_l / 1000);
    min = Math.floor(sec / 60);
  }
    return(
        <div className="clock">
        <div className="c_text" id="c_text_left"><span id="bib_left"></span> TIME:</div>
        <div className="timebox">
          <div className="timetext"><span id="minutes_left">{pad(min)}</span>:<span id="seconds_left">{pad(sec%60)}</span>:<span id="fractions_left">{pad(fractions)}</span></div>
        </div>
      </div>
    );
}
  

export default LeftClock;