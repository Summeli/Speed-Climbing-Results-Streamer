import React  from 'react';
import Clock from '../components/clock';
import "./home.css";

const Home: React.FunctionComponent = () => {
    return(
        <div className="home">
            <Clock></Clock>
        </div>
    );
}
  

export default Home;