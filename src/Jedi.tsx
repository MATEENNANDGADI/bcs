import React from 'react';
import './Jedi.css';  // Importing the CSS file for styling

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
            src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Lightsaber%2C_silver_hilt%2C_blue_blade.png" 
            alt="Lightsaber" 
            className="lightsaber-image" 
          />
        </div>
      </div>
    );
  }
}

export default Jedi;
