import React from "react";
import logo from "../images/logo.png";
import logoWhite from "../images/logo-white.png"
import "./Footer.css";
const Footer = (props) => {
  return (
    <>
      <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <div
          className="container"
          style={{
            marginTop: "3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <div className="footer" style={{marginBottom:'2rem'}}>
            <img src={props.mode==='black'?logoWhite:logo} style={{ height: "3.5vh", width: "9vh", marginBottom:'1rem'}} alt="..."/>
            <p style={{color:`${props.mode === "black" ? "white" : "black"}`}}>
              <i
                style={{ color: "#FF5555" }}
                className="fa-solid fa-envelope"
              ></i>{" "}
              Help@Frybix.Com
            </p >
            <p style={{color:`${props.mode === "black" ? "white" : "black"}`}}>
              <i style={{ color: "#FF5555" }} className="fa-solid fa-phone"></i>{" "}
              +1 234 456 678 89
            </p>
          </div>

          <div className="footer" style={{ marginTop: "2.7rem" }}>
            <h2 style={{color:`${props.mode === "black" ? "white" : "black"}`}}>Links</h2>
            <p style={{color:`${props.mode === "black" ? "white" : "black"}`}} >Home</p>
            <p style={{color:`${props.mode === "black" ? "white" : "black"}`}} >About Us</p>
            <p style={{color:`${props.mode === "black" ? "white" : "black"}`}} >Bookings</p>
            <p style={{color:`${props.mode === "black" ? "white" : "black"}`}} >Blog</p>
          </div>

          <div className="footer">
            <h2 style={{color:`${props.mode === "black" ? "white" : "black"}`}}>Legal</h2>
            <p style={{color:`${props.mode === "black" ? "white" : "black"}`}}>Terms of Use</p>
            <p style={{color:`${props.mode === "black" ? "white" : "black"}`}}>Privacy Policy</p>
            <p style={{color:`${props.mode === "black" ? "white" : "black"}`}}>Cookie Policy</p>
          </div>

          <div className="footer">
            <h2 style={{color:`${props.mode === "black" ? "white" : "black"}`}}>Product</h2>
            <p style={{color:`${props.mode === "black" ? "white" : "black"}`}}>Take Tour</p>
            <p style={{color:`${props.mode === "black" ? "white" : "black"}`}}>Live Chat</p>
            <p style={{color:`${props.mode === "black" ? "white" : "black"}`}}>Reviews</p>
          </div>

          <div className="footer" style={{ marginBottom: "2.5rem" }}>
            <h2 style={{color:`${props.mode === "black" ? "white" : "black"}`}}>Newsletter</h2>
            <p style={{color:`${props.mode === "black" ? "white" : "black"}`}}>Stay Up To Date</p>
            <div style={{ display: "flex", alignItems: "center"}}>
              <input
                className="email-input"
                type="email"
                placeholder="Type Your Email Here"
              />
              <button className="subscribe-button" style={{border:`${props.mode === "black" ? "1px solid white" : "none"}`,marginLeft:'0.3rem'}}>Subscribe</button>
            </div>
          </div>
        </div>
        <p style={{fontSize:'15px',fontFamily:'Ubuntu',color:`${props.mode === "black" ? "white" : "black"}`}}>Copyright 2022 Uifry.Com All Rights Reserved</p>
      </div>
    </>
  );
};

export default Footer;
