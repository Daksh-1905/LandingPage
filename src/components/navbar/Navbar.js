import React, { useState ,useEffect} from "react";
import { Link, Events, scrollSpy } from "react-scroll";
import "./Navbar.css";
import logo from "../images/logo.png";
import logoWhite from "../images/logo-white.png";
const Navbar = (props) => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    Events.scrollEvent.register("begin", (to) => {
      setActiveSection(to);
    });

    Events.scrollEvent.register("end", (to) => {
      setActiveSection(to);
    });

    // Register the scroll spy to keep track of scroll positions
    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const buttonStyle = (isHovered, section) => ({
    backgroundColor:
      isHovered || activeSection === section
        ? "#FF5555"
        : `${props.mode === "black" ? "black" : "white"}`,
    cursor: "pointer",
    color:`${props.mode === "black" ? "white" : "black"}`,
    padding:'0.4rem 1rem',
    borderRadius:'20px'
  });

  return (
    <>
      <nav className="container" style={{ backgroundColor: `${props.mode}` }}>
        <Link to="Home" smooth={true} duration={200} offset={-101}>
          <img
            src={props.mode === "black" ? logoWhite : logo}
            style={{ height: "4vh", cursor: "pointer" }}
            alt="..."
          />
        </Link>

        <ul>
          <li className="nav-items">
            <Link
              activeClass="active"
              spy={true}
              to="Home"
              smooth={true}
              duration={200}
              offset={-101}
              style={buttonStyle(isHovered1, "Home")}
              onMouseEnter={() => {
                setIsHovered1(true);
              }}
              onMouseLeave={() => {
                setIsHovered1(false);
              }}
            >
              Home
            </Link>
            <Link
              activeClass="active"
              spy={true}
              to="Features"
              smooth={true}
              duration={200}
              offset={-101}
              style={buttonStyle(isHovered2, "Features")}
              onMouseEnter={() => {
                setIsHovered2(true);
              }}
              onMouseLeave={() => {
                setIsHovered2(false);
              }}
            >
              Features
            </Link>
            <Link
              activeClass="active"
              spy={true}
              to="Advantages"
              smooth={true}
              duration={200}
              offset={-101}
              style={buttonStyle(isHovered3, "Advantages")}
              onMouseEnter={() => {
                setIsHovered3(true);
              }}
              onMouseLeave={() => {
                setIsHovered3(false);
              }}
            >
              Advantages
            </Link>
            <Link
              activeClass="active"
              spy={true}
              to="Testimonial"
              smooth={true}
              duration={200}
              offset={-101}
              style={buttonStyle(isHovered4, "Testimonial")}
              onMouseEnter={() => {
                setIsHovered4(true);
              }}
              onMouseLeave={() => {
                setIsHovered4(false);
              }}
            >
              Testimonial
            </Link>
            <Link
              activeClass="active"
              spy={true}
              to="Faq"
              smooth={true}
              duration={200}
              offset={-101}
              style={buttonStyle(isHovered5, "Faq")}
              onMouseEnter={() => {
                setIsHovered5(true);
              }}
              onMouseLeave={() => {
                setIsHovered5(false);
              }}
            >
              FAQ
            </Link>
          </li>
          <div style={{ display: "flex", alignItems: "center" }}>
            <button
              className="mode-button"
              onClick={props.toggleMode}
              style={{
                border: `${
                  props.mode === "black" ? "1px solid white" : "none"
                }`,
              }}
            >
              {props.mode === "white" ? (
                <i className="fa-solid fa-moon" style={{ color: "white" }}></i>
              ) : (
                <i className="fa-solid fa-sun" style={{ color: "white" }}></i>
              )}
            </button>
            <button
              className="download-button"
              style={{
                border: `${
                  props.mode === "black" ? "1px solid white" : "none"
                }`,
              }}
            >
              Download
            </button>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
