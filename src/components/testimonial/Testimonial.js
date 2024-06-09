import React from "react";
import "./Testimonial.css";
import testin from "../images/testin.png";
import avatar from "../images/avatar.png";
import { Element } from "react-scroll";
const Testimonial = (props) => {
  return (
    <>
      <Element name="Testimonial">
        <div
          className="container"
          style={{ display: "flex", flexDirection: "column" }}
          id="Testimonial"
        >
          <div
            className="testimonial-heading"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h4
              style={{ color: `${props.mode === "black" ? "white" : "black"}` }}
            >
              TESTIMONIAL
            </h4>
            <h1
              style={{ color: `${props.mode === "black" ? "white" : "black"}` }}
            >
              What Our Users
            </h1>
            <h1
              style={{ color: `${props.mode === "black" ? "white" : "black"}` }}
            >
              Say About Us?
            </h1>
          </div>

          <div
            className="testimonial-desc"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <img src={testin} alt="..." style={{ height: "100vh" }} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <h1
                style={{
                  color: `${props.mode === "black" ? "white" : "black"}`,
                }}
              >
                The Best Financial Accounting App Ever!
              </h1>
              <p
                style={{
                  marginTop: "1rem",
                  color: `${props.mode === "black" ? "white" : "grey"}`,
                }}
              >
                “Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan,
                Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis
                Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis
                Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget
                Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.”
              </p>
              <img src={avatar} alt="..." style={{ height: "7vh" }} />
              <h6
                style={{
                  fontFamily: "Ubuntu",
                  fontWeight: "bolder",
                  marginTop: "1rem",
                  color: `${props.mode === "black" ? "white" : "black"}`,
                }}
              >
                Nick Joans
              </h6>
            </div>
          </div>
        </div>
      </Element>
    </>
  );
};

export default Testimonial;
