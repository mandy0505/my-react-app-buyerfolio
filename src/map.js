import React from 'react';

const Map = ({ width, height, className }) => {
  return (
    <div className={`map-container ${className}`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5771.917660434748!2d-79.37839350462785!3d43.66982604492352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb51a3891935%3A0xa11c73fe81eacdd0!2sSt.%20James%20Town%2C%20Toronto%2C%20ON!5e0!3m2!1sen!2sca!4v1704559350058!5m2!1sen!2sca"
        width={width}
        height={height}
        style={{ border: '0', width: '100%', height: '100%' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default Map;
