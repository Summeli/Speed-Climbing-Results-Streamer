import React  from 'react';
import Clock from '../components/leftClock';
import { ClockProvider } from '../components/clockContext';
import "./home.css";
import LeftClock from '../components/leftClock';

const Home: React.FunctionComponent = () => {
    return(
        <ClockProvider>
        <div className="home">
            <LeftClock></LeftClock>
        </div>
        </ClockProvider>
    );
}
  

export default Home;