import React, { useContext, useState } from 'react';


const loopinterval : number = 25;
const ping_interval : number = 60000;

type ClockContext = {
    time : number;
    delay : number;
    stopped_l : number;
    totaltime_l : number;
    running_l : number;
    stopped_r : number;
    totaltime_r : number;
    running_r : number;
    bib_r : string;
    bib_l : string;
    results_l : string;
    results_r : string;
  };
  
// eslint-disable-next-line  
const ClockContext = React.createContext<Partial<ClockContext>>({});

export const useClock = () => useContext(ClockContext);

type UserContextProps = {
    children: React.ReactNode;
  };

export const ClockProvider: React.FunctionComponent<ClockContext> = ({children}) => {
    const [time, setTime] = useState(0);
  

    return (
        <ClockContext.Provider
          value={{
            time
          }}
        >
          {children}
        </ClockContext.Provider>
      );
}