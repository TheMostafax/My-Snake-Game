import React from 'react';
import './preloader.css';
import { useEffect } from "react";
import { preLoaderAnim } from "../animation";
const Preloader = () => {
  //useEffect(() => {
    //preLoaderAnim();
//}, []);//
  return (
    <div className="preloader">
      <div className="preloader-inner">
        <div className="preloader-icon"></div>
        <h2 className="text-4xl">Loading...</h2>
      </div>
    </div>
  );
};

export default Preloader;