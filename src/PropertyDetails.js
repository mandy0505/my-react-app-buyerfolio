import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const PropertyDetails = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpandedProperty, setIsExpandedProperty] = useState(false);
  const [isExpandedConstruction, setIsExpandedConstruction] = useState(false);
  const [isExpandedUtilities, setIsExpandedUtilities] = useState(false);
  const [isExpandedCommunity, setIsExpandedCommunity] = useState(false);

  const handleToggle = () => {
    setIsExpanded((prevExpanded) => !prevExpanded);
  };

  const handleToggleProperty = () => {
    setIsExpandedProperty((prevExpanded) => !prevExpanded);
  };

  const handleToggleConstruction = () => {
    setIsExpandedConstruction((prevExpanded) => !prevExpanded);
  };

  const handleToggleUtilities = () => {
    setIsExpandedUtilities((prevExpanded) => !prevExpanded);
  };

  const handleToggleCommunity = () => {
    setIsExpandedCommunity((prevExpanded) => !prevExpanded);
  };

  return (
    <div>
      <div className="details-border">
        {/* Details Toggle */}
        <div className="details-heading">
          <h2 className="left-aligned-heading">Home Details</h2>
          <div className="expand-toggle" onClick={handleToggle}>
            <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} />
          </div>
        </div>
        {isExpanded && (
          <div className="expanded-details">
            <div className="details-container">
              <div className="details-column">
                <h4 className="left-aligned-heading">Bedroom & Bathroom</h4>
                <p>&gt;&gt; Bedroom: 3</p>
                <p>&gt;&gt; Bathroom: 3</p>
                <p>&gt;&gt; Partial Bathrooms: 1</p>

                <h4>Recreation room</h4>
                <p>&gt;&gt; Level: Lower</p>
                <p>&gt;&gt; Area: 322.8 Sqft</p>
                <p>&gt;&gt; Dimensions: 22.5"*12.3"</p>
               
                <h4>Kitchen</h4>
                <p>&gt;&gt; Level: Main</p>
                <p>&gt;&gt; Area: 104.3 Sqft</p>
                <p>&gt;&gt; Dimensions: 10.9"*9.6"</p>

                <h4>Bedroom</h4>
                <p>&gt;&gt; Level: Second</p>
                <p>&gt;&gt; Area: 122 Sqft</p>
                <p>&gt;&gt; Dimensions: 12"*9.6"</p>

                <h4>Basement</h4>
                <p>&gt;&gt; Basement: Full, Finished</p>
               
                <h4>Heating</h4>
                <p>&gt;&gt; Features: Natural Gas, Forced Air</p>

                <h4>Appliances</h4>
                <p>&gt;&gt; Included: Dishwasher, Dryer, washer</p>
              </div>

              <div className="details-column">
                <h4 className="left-aligned-heading">Living Room</h4>
                <h4>Living Room</h4>
              <p>&gt;&gt; Level: Main</p>
              <p>&gt;&gt; Area: 156.22 Sqft</p>
              <p>&gt;&gt; Dimension: 15.5"*10.8"</p>

              <h4>Dining Room</h4>
              <p>&gt;&gt; Level: Main</p>
              <p>&gt;&gt; Area: 122.8 Sqft</p>
              <p>&gt;&gt; Dimensions: 11.3"*11.2"</p>

              <h4>Primary Bedroom</h4>
              <p>&gt;&gt; Level: Second</p>
              <p>&gt;&gt; Area: 162 Sqft</p>
              <p>&gt;&gt; Dimensions: 14.5"*8.3"</p>

              <h4>Bedroom</h4>
              <p>&gt;&gt; Level: Second</p>
              <p>&gt;&gt; Area: 128 Sqft</p>
              <p>&gt;&gt; Dimensions: 14.8"*8.9"</p>

              <h4>Flooring</h4>
              <p>&gt;&gt; Flooring: Carpet W/W & Mixed, Tile</p>

              <h4>Cooling</h4>
              <p>&gt;&gt; Features: Central Air Conditioning</p>

              <h4>Interior Features</h4>
              <p>&gt;&gt; Windows: Drapes, Blinds</p>

              </div>
            </div>
          </div>
        )}

        {/* Property Toggle */}
        <div className="details-heading">
          <h2 className="left-aligned-heading">Property</h2>
          <div className="expand-toggle" onClick={handleToggleProperty}>
            <FontAwesomeIcon icon={isExpandedProperty ? faChevronUp : faChevronDown} />
          </div>
        </div>
        {isExpandedProperty && (
          <div className="expanded-details">
            <div className="details-container">
              <div className="details-columns">
                <h4>Parking</h4>
                <p>&gt;&gt; Total Spaces: 4</p>
              <p>&gt;&gt; Features: 1 Garage attached, Inside entrance, Oversized </p>
              <p>&gt;&gt; Garage Spaces: 1</p>
              <p>&gt;&gt; Covered Spaces: 1</p>

              <h4>Property</h4>
              <p>&gt;&gt; Levels: Two</p>
              <p>&gt;&gt; Frontage Length: 39.83</p>
              </div>

              <div className="details-columns">
                <h4>Lot</h4>
                <p>&gt;&gt; Lot Size: 3,730 Sqft</p>
              <p>&gt;&gt; Dimensions: 39.5"*80.8"</p>

              <h4>Other Information</h4>
              <p>&gt;&gt; Additional Structures Included: Storage Shed</p>
              <p>&gt;&gt; Parcel number: 041580009</p>
              <p>&gt;&gt; Zoning Description: Residential</p>
              </div>
            </div>
          </div>
        )}

        {/* Construction Toggle */}
        <div className="details-heading">
          <h2 className="left-aligned-heading">Construction</h2>
          <div className="expand-toggle" onClick={handleToggleConstruction}>
            <FontAwesomeIcon icon={isExpandedConstruction ? faChevronUp : faChevronDown} />
          </div>
        </div>
        {isExpandedConstruction && (
          <div className="expanded-details">
            <div className="details-container">
              <div className="details-column">
                <h4>Type & style</h4>
                <p>&gt;&gt; Home Type: Single Family</p>
              <p>&gt;&gt; Property subtype: Residential</p>

              <h4>Condition</h4>
              <p>&gt;&gt; Year Built: 1986</p>
              </div>

              <div className="details-column">
                <h4>Material Information</h4>
                <p>&gt;&gt; Construction Material: Brick, Siding</p>
              <p>&gt;&gt; Foundation: Concrete Perimeter</p>
              </div>
            </div>
          </div>
        )}

        {/* Utilities & Green energy Toggle */}
        <div className="details-heading">
          <h2 className="left-aligned-heading">Utilities & Green energy</h2>
          <div className="expand-toggle" onClick={handleToggleUtilities}>
            <FontAwesomeIcon icon={isExpandedUtilities ? faChevronUp : faChevronDown} />
          </div>
        </div>
        {isExpandedUtilities && (
          <div className="expanded-details">
            <div className="details-container">
              <div className="details-column">
                <h4>Type & style</h4>
                <p>&gt;&gt; Sewer Information: Sewer Connected</p>
              <p>&gt;&gt; Water Information: Municipal</p>
              </div>

              <div className="details-column">
                <h4>Material Information</h4>
                <h4>Community</h4>
              <p>&gt;&gt;Features: Playground Nearby, Public Transit Nearby, Recreation nearby, Shopping nearby</p>
          
              </div>
            </div>
          </div>
        )}

        {/* Community and Neighborhood Toggle */}
        <div className="details-heading">
          <h2 className="left-aligned-heading">Community and Neighborhood</h2>
          <div className="expand-toggle" onClick={handleToggleCommunity}>
            <FontAwesomeIcon icon={isExpandedCommunity ? faChevronUp : faChevronDown} />
          </div>
        </div>
        {isExpandedCommunity && (
          <div className="expanded-details">
            <div className="details-container">
              <div className="details-column">
                <h4>Utility</h4>
                <p>&gt;&gt;Sewer information :Sewer Connected </p>
                <h4>Location</h4>
              <p>&gt;&gt;Region: Toronto</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyDetails;
