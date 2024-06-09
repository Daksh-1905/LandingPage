import React, { useState } from "react";
import "./Banner.css";
import bannerImage from "../images/banner-image.png"
const Banner = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const buttonStyle = {
    border: `${props.mode === "black" ? "1px solid white" : "none"}`,
    backgroundColor: isHovered
      ? "#FF5555"
      : `${props.mode === "black" ? "black" : "white"}`,
    color: isHovered?'white':`${props.mode === "black" ? "white" : "black"}`,
  };
  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: "black",
          height: "60vh",
          width: "100%",
          marginTop: "3rem",
          display: "flex",
          alignItems:'center',
          justifyContent:'center'
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "4rem 4rem",
          }}
        >
          <h1
            style={{ color: "white", fontSize: "4rem", fontWeight: "bolder"}}
          >
            Ready To Get Started?
          </h1>
          <p style={{ color: "white", fontSize: "1.5rem", marginTop: "3rem" }}>
            Risus Habitant Leo Egestas Mauris Diam Eget Morbi <br />
            Tempus Vulputate.
          </p>
          <button
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
            style={buttonStyle}
            className="download-button-banner"
          >
            Download
          </button>
        </div>
        <img src={bannerImage} alt="..."/>
      </div>
    </>
  );
};

export default Banner;
