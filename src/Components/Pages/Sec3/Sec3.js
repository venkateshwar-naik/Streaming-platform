import React from "react";
import "./Sec3.css";

const Sec3 = () => {
  return (

    
    <div className="movies">
      <div className="move">
        <div className="movie">
          <img src={require("../../../Assests/avengers.jpg")} alt="" />
          <img src={require("../../../Assests/baaghi3.jpg")} alt="" />
          <img src={require("../../../Assests/bahubali.jpg")} alt="" />
        </div>
        <div className="movie">
          <img src={require("../../../Assests/got.jpg")} alt="" />
          <img src={require("../../../Assests/kgf2.jpg")} alt="" />
          <img src={require("../../../Assests/liger.jpg")} alt="" />
        </div>

        <div className="movie">
          <img src={require("../../../Assests/lionking.jpg")} alt="" />
          <img src={require("../../../Assests/rrr.jpeg")} alt="" />
          <img src={require("../../../Assests/sacredgames.jpg")} alt="" />
        </div>
        <div className="movie">
          <img src={require("../../../Assests/shamshera.jpg")} alt="" />
          <img src={require("../../../Assests/super30.jpg")} alt="" />
          <img src={require("../../../Assests/vikram.jpg")} alt="" />
        </div>
      </div>

      <div className="lap">
        <img
          src={require("../../../Assests/32714-6-apple-computer.png")}
          alt=""
        />
      </div>
    </div>
  );
};

export default Sec3;
