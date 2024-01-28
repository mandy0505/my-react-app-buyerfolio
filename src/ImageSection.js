/* SimpleImage.js */

import React from 'react';
import './SimpleImage.css';
import Map from './map';
import PropertyDetails from './PropertyDetails'; 
import Slider from './Slider';

const SimpleImage = () => {
  return (
    <div className="image-container">
      <div className="content-container">
        <div className="image-section-container">
          <div className="image-section">
            <img src="/main.png" alt="main-image" className="ima" />
            <img src="/main1.png" alt="image1" className="additional-image" />
            <img src="/main2.png" alt="image2" className="additional-image" />
          </div>
        </div>
        <div className="text-map-container">
          <div className="text-container">
            <p>CAD 50000</p>
          </div>
          <div className="map-container">
            <Map className="small-map" width="300" height="200" />
          </div>
        </div>
        <div className="additional-content-container">
          <h4 className="left-aligned-heading">Overview</h4>
          <p className="left-aligned-heading">
            Great renovation opportunity for this 3 bedroom, 1 bath home on a fenced lot.
            Terrazzo floors throughout, original kitchen and bathroom, indoor laundry,
            workshop, spacious backyard, impact windows, carport. Close to Larry and Penny
            Thompson Memorial Park and Campground and Zoo Miami.
          </p>
        </div>
        <img src="/insight.png" alt="over" className="comp" /> {/* Image with class "comp" */}
        <div className="property-details-slider-container">
          <div className="property-details-container">
            <PropertyDetails />
            <img src="/sim.png" alt="similar" className="same" />
            <img src="/nearby.png" alt="more" className="all" />
            <img src="/end1.png" alt="finish" className="fin" />
          </div>
          <div className="slider-container">
            <Slider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleImage;
