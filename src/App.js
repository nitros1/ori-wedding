import React, { useState, useEffect } from 'react';
import './App.css';
import background from './images/background.jpg';
import invite from './images/inv.png';

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <div className="App-header" style={{ backgroundImage: `url(${background})` , filter: `blur(${scrollPosition / 10}px)` }}>           
        <div className='invite' style={{ backgroundImage: `url(${invite})` , filter: `blur(${scrollPosition / 10}px)` }}>          
          <button className='btn'>Click me</button>          
        </div>
      </div>
    </div>
  );
}

export default App;