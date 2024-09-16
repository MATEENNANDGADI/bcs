import React from 'react';
import './Jedi.css';  
import mateen from './asset/pngegg.png';

class Jedi extends React.Component {
  render() {
    return (
      <div className="jedi-container">
        <div className="jedi-header">
          <h1>Welcome, Abdul Mateen!</h1>
          <p>May ALLAH be with you</p>
        </div>
        <div className="jedi-graphic">
          <img 
            src={mateen}
           alt="cant" 
            className="lightsaber-image"
          />
        </div>
      </div>
    );
  }
}

export default Jedi;
