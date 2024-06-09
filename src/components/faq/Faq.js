import React from "react";
import "./Faq.css";
import { Element } from "react-scroll";
const Faq = (props) => {
  return (
    <>
      <Element name='Faq'>
        <div className="container" id="Faq">
          <div
            className="faq-heading"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <h5 style={{ color: "#FF5555" }}>FAQ</h5>
            <h1
              style={{ color: `${props.mode === "black" ? "white" : "black"}` }}
            >
              Frequently Asked <br />
              Questions
            </h1>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginTop: "2rem",
            }}
          >
            <div style={{ display: "flex" }}>
              <div className="card-no-odd" style={{ marginRight: "2rem" }}>
                <h2>The Best Financial Accounting App Ever!</h2>
                <p>
                  “Arcu At Dictum Sapien, Mollis. Vulputate Sit Id <br />
                  Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.
                </p>
              </div>
              <div
                className="card-no-even"
                style={{
                  color: `${props.mode === "black" ? "white" : "black"}`,
                  backgroundColor: `${
                    props.mode === "black" ? "black" : "white"
                  }`,
                }}
              >
                <h2>The Best Financial Accounting App Ever!</h2>
                <p>
                  “Arcu At Dictum Sapien, Mollis. Vulputate Sit Id <br />
                  Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.
                </p>
              </div>
            </div>

            <div style={{ display: "flex" }}>
              <div
                className="card-no-even"
                style={{
                  marginRight: "2rem",
                  color: `${props.mode === "black" ? "white" : "black"}`,
                  backgroundColor: `${
                    props.mode === "black" ? "black" : "white"
                  }`,
                }}
              >
                <h2>The Best Financial Accounting App Ever!</h2>
                <p>
                  “Arcu At Dictum Sapien, Mollis. Vulputate Sit Id <br />
                  Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.
                </p>
              </div>
              <div className="card-no-odd">
                <h2>The Best Financial Accounting App Ever!</h2>
                <p>
                  “Arcu At Dictum Sapien, Mollis. Vulputate Sit Id <br />
                  Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.
                </p>
              </div>
            </div>

            <div style={{ display: "flex" }}>
              <div className="card-no-odd" style={{ marginRight: "2rem" }}>
                <h2>The Best Financial Accounting App Ever!</h2>
                <p>
                  “Arcu At Dictum Sapien, Mollis. Vulputate Sit Id <br />
                  Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.
                </p>
              </div>
              <div
                className="card-no-even"
                style={{
                  color: `${props.mode === "black" ? "white" : "black"}`,
                  backgroundColor: `${
                    props.mode === "black" ? "black" : "white"
                  }`,
                }}
              >
                <h2>The Best Financial Accounting App Ever!</h2>
                <p>
                  “Arcu At Dictum Sapien, Mollis. Vulputate Sit Id <br />
                  Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </>
  );
};

export default Faq;
