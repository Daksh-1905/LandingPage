import React from "react";
import "./Homepage.css";
import mobileOp from "../images/mobile-op.png";
import vNagStrap from "../images/vnag-strap.png";
import { Element } from "react-scroll";
const Homepage = (props) => {
  return (
    <>
      <Element name="Home">
        <div
          className="container"
          style={{
            marginTop: "3rem",
            display: "flex",
            justifyContent: "space-between",
          }}
          id="Home"
        >
          <div
            className="container"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <h1
              style={{ color: `${props.mode === "black" ? "white" : "black"}` }}
            >
              Make The Best <br />
              Financial <br />
              Decisions
            </h1>
            <p
              style={{
                marginTop: "5rem",
                color: `${props.mode === "black" ? "white" : "black"}`,
              }}
            >
              Cum Et Convallis Risus Placerat Aliquam, Nunc. <br />
              Scelerisque Aliquet Faucibus Tincidunt Eu <br />
              Adipiscing Sociis Arcu Lorem Porttitor.
            </p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <button
                className="getStarted-button"
                style={{
                  border: `${
                    props.mode === "black" ? "1px solid white" : "none"
                  }`,
                }}
              >
                Get Started <i className="fa-solid fa-arrow-right"></i>
              </button>
              <button
                className="watchVideo-button"
                style={{
                  border: `${
                    props.mode === "white" ? "1px solid black" : "none"
                  }`,
                }}
              >
                <i className="fa-solid fa-play"></i> Watch Video
              </button>
            </div>
            <img
              src={vNagStrap}
              alt="..."
              style={{ width: "40vw", height: "50vh" }}
            />
          </div>
          <img
            src={mobileOp}
            alt="..."
            style={{ height: "80vh", width: "45vw" }}
          />
        </div>
      </Element>
    </>
  );
};

export default Homepage;
