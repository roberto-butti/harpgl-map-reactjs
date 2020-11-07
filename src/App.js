import React, { useEffect, useRef } from 'react';
import './App.css';
import { GeoCoordinates } from '@here/harp-geoutils';
import { MapControls, MapControlsUI } from '@here/harp-map-controls';
import { MapView } from '@here/harp-mapview';
import { OmvDataSource } from '@here/harp-omv-datasource';

const initialCoordinates = new GeoCoordinates(41.890251, 12.492373);
const initialZoomLevel = 17;
const minZoomLevel = 3;
const maxZoomLevel = 19;

function App() {
  const canvasRef = useRef(null);
  const mapRef = useRef(null);


  useEffect(() => {
    const map = mapRef.current = new MapView({
      theme: "https://unpkg.com/@here/harp-map-theme@latest/resources/berlin_tilezen_base_globe.json",
      canvas: canvasRef.current,
      target: initialCoordinates,
      zoomLevel: initialZoomLevel,
    });
    // center the camera to Colosseum
    map.lookAt({
      target: initialCoordinates,
      zoomLevel: initialZoomLevel,
      tilt: 40,
    });
    const omvDataSource = new OmvDataSource({
      authenticationCode: process.env.REACT_APP_HERE_APIKEY,
    });
    map.addDataSource(omvDataSource);

    const onWindowResize = () => map.resize(window.innerWidth, window.innerHeight);
    window.addEventListener('resize', onWindowResize);

    return () => window.removeEventListener('resize', onWindowResize);

  }, []);
  useEffect(() => {
    const controls = new MapControls(mapRef.current);
    const uiControls = new MapControlsUI(controls);

    controls.minZoomLevel = minZoomLevel;
    controls.maxZoomLevel = maxZoomLevel;

    canvasRef.current
      .parentElement
      .appendChild(uiControls.domElement);

  }, []);



  return (
    <div className="App">
      <canvas ref={canvasRef} />

    </div>
  );
}

export default App;
