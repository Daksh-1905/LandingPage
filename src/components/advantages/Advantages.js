import React from "react";
import "./Advantages.css";
import specs3 from "../images/specs3.png";
import specs2 from "../images/specs2.png";
import { Element } from "react-scroll";
const Advantages = (props) => {
  return (
    <>
    <Element name='Advantages'>
    <div
        className="container"
        style={{ display: "flex", marginTop: "3rem", alignItems: "center" }}
        id='Advantages'
      >
        <div
          className="advantage-desc"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <h5 style={{ color: '#FF5555' }}>ADVANTAGES</h5>
          <h2
            style={{ color: `${props.mode === "black" ? "white" : "black"}` }}
          >
            Why Choose Uifry?
          </h2>
          <h2
            style={{
              fontSize: "27px",
              marginTop: "2.5rem",
              fontWeight: "bolder",
              color: `${props.mode === "black" ? "white" : "black"}`,
            }}
          >
            <i style={{ color: '#FF5555' }} className="fa-solid fa-bell fa-xl"></i>{" "}
            Clever Notifications
          </h2>
          <p style={{ marginTop: "2rem",color:`${props.mode==='black'?'white':'black'}`}}>
            Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies.
            In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus,
            Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse
            Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien,
            Suspendisse Aliquam.
          </p>
        </div>
        <img src={specs3} alt="..." style={{ height: "117vh" }} />
      </div>

      <div
        className="container"
        style={{ display: "flex", marginTop: "3rem", alignItems: "center" }}
      >
        <img src={specs2} alt="..." style={{ height: "105vh" }} />
        <div
          className="advantage-desc"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <h2
            style={{
              fontSize: "27px",
              marginTop: "2.5rem",
              fontWeight: "bolder",
              color:`${props.mode==='black'?'white':'black'}`
            }}
          >
            <i
              style={{ color: '#FF5555', marginRight: "0.5rem" }}
              className="fa-solid fa-star-of-life fa-xl"
            ></i>
            Fully Customizable
          </h2>
          <p style={{ marginTop: "2rem",color:`${props.mode==='black'?'white':'black'}`}}>
            Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies.
            In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus,
            Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse
            Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien,
            Suspendisse Aliquam.
          </p>
        </div>
      </div>
    </Element>
      
    </>
  );
};

export default Advantages;
