import React from 'react';
import "./Preloader.css";

const Preloader = () => {
  return (
    <div className="loaderBox">
      <div className="mosaic-loader">
        <div className="cell d-0"></div>
        <div className="cell d-1"></div>
        <div className="cell d-2"></div>
        <div className="cell d-3"></div>
        <div className="cell d-1"></div>
        <div className="cell d-2"></div>
        <div className="cell d-3"></div>
        <div className="cell d-4"></div>
        <div className="cell d-2"></div>
        <div className="cell d-3"></div>
        <div className="cell d-4"></div>
        <div className="cell d-5"></div>
        <div className="cell d-3"></div>
        <div className="cell d-4"></div>
        <div className="cell d-5"></div>
        <div className="cell d-6"></div>
      </div>
    </div>
  );
};

export default Preloader;