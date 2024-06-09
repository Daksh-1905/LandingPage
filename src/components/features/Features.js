import React from "react";
import specs1 from "../images/specs1.png";
import "./Features.css";
import { Element } from "react-scroll";
const Features = (props) => {
  return (
    <>
      <Element name='Features'>
        <div
          className="container"
          style={{ display: "flex", marginTop: "3rem", alignItems: "center" }}
          id="Features"
        >
          <img src={specs1} alt="..." style={{ height: "95vh" }} />
          <div
            className="container"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <h2 style={{ color: "#FF5555" }}>FEATURES</h2>
            <h1
              style={{
                fontSize: "70px",
                marginTop: "-1rem",
                color: `${props.mode === "black" ? "white" : "black"}`,
              }}
            >
              Uifry Premium
            </h1>
            <div className="features-desc" style={{ marginTop: "3rem" }}>
              <h2
                style={{
                  color: `${props.mode === "black" ? "white" : "black"}`,
                }}
              >
                <i
                  style={{ color: "#FF5555" }}
                  className="fa-regular fa-star fa-xs"
                ></i>{" "}
                Budgeting Interval
              </h2>
              <p>
                Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque
                Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem
                Porttitor.
              </p>
            </div>
            <div className="features-desc" style={{ marginTop: "1rem" }}>
              <h2
                style={{
                  color: `${props.mode === "black" ? "white" : "black"}`,
                }}
              >
                <i
                  style={{ color: "#FF5555", padding: "0 5px" }}
                  className="fa-solid fa-draw-polygon fa-xs"
                ></i>
                Budgeting Interval
              </h2>
              <p>
                Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque
                Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem
                Porttitor.
              </p>
            </div>
            <div className="features-desc" style={{ marginTop: "1rem" }}>
              <h2
                style={{
                  color: `${props.mode === "black" ? "white" : "black"}`,
                }}
              >
                <i
                  style={{ color: "#FF5555", padding: "0 5px" }}
                  className="fa-solid fa-cube fa-xs"
                ></i>
                Budgeting Interval
              </h2>
              <p>
                Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque
                Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem
                Porttitor.
              </p>
            </div>
          </div>
        </div>
      </Element>
    </>
  );
};

export default Features;
