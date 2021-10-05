import React  from 'react';

const Clock: React.FunctionComponent = () => {
    return(
        <div className="clock">
        <div className="c_text" id="c_text_left"><span id="bib_left"></span> TIME:</div>
        <div className="timebox">
          <div className="timetext"><span id="minutes_left"></span>:<span id="seconds_left"></span>:<span id="fractions_left"></span></div>
        </div>
      </div>
    );
}
  

export default Clock;