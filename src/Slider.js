// Slider.js
import React, { useState } from 'react';
import './Slider.css'; // Import the CSS file

const Slider = () => {
  // State to manage the slider value
  const [sliderValue, setSliderValue] = useState(100000);

  // Event handler for slider value change
  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <div className="slide-border">
    <div className="slider-container">
      <div className="slider1">
        <h2>Full Market Value</h2>
        <p>$: {sliderValue}</p>
      </div>

      {/* Slider input */}
      <input
        type="range"
        min="0"
        max="200000"
        value={sliderValue}
        onChange={handleSliderChange}
      />

<div className="slider2">
        <h2>Share Percentages</h2>
        <p>$: {sliderValue}</p>
      </div>

      {/* Slider input */}
      <input
        type="range"
        min="0"
        max="200000"
        value={sliderValue}
        onChange={handleSliderChange}
      />
<div className="slider3">
        <h2>Deposit Amount</h2>
        <p>$: {sliderValue}</p>
      </div>

      {/* Slider input */}
      <input
        type="range"
        min="0"
        max="200000"
        value={sliderValue}
        onChange={handleSliderChange}
      />

<div className="slider4">
        <h2>Mortgage Rate</h2>
        <p>$: {sliderValue}</p>
      </div>

      {/* Slider input */}
      <input
        type="range"
        min="0"
        max="200000"
        value={sliderValue}
        onChange={handleSliderChange}
      />

<div className="slider5">
        <h2>Amortization</h2>
        <p>$: {sliderValue}</p>
      </div>

      {/* Slider input */}
      <input
        type="range"
        min="0"
        max="200000"
        value={sliderValue}
        onChange={handleSliderChange}
      />
    
    </div>
    </div>
  );
};

export default Slider;
