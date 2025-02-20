import React, { useEffect, useRef } from 'react';
import styled from 'styled-components'
import L from 'leaflet';

const Footer = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      // Initialize the map
      const map = L.map('office-map').setView([3.147421072352271, 101.66448282930992], 15); // Replace with your office location's latitude and longitude

      // Add the tile layer (map background) from a map provider (e.g., OpenStreetMap)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

      // Add a marker for your office location
      L.marker([3.147421072352271, 101.66448282930992]).addTo(map); // Replace with your office location's latitude and longitude

      mapRef.current = map;
    }
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className='contact'>
          <h5>Reach Out to Us At</h5>
            <div>
              <p>Mobile: 012 267 0130</p>
              <p>Email: jason.ortq@gmail.com</p>
            </div>
            <div>
              <a href="https://www.orientiques.online/privacy" target="_blank" rel="noopener noreferrer">Our Privacy Policy</a>
            </div>
        </div>
        <div className='address'>
          <h5>Visit Us At</h5>
          <div>
          <p>14, Jalan Damansara Permai</p>
          <p> 50490, Kuala Lumpur</p>
          <p>Malaysia</p>
          </div>
        </div>
        <div id="office-map" className="office-map" />
      </div>
    </footer>
  );
};

export default Footer;
