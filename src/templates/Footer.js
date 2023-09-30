import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { BiLogoInstagram, BiLogoGithub } from "react-icons/bi";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import Carousel from "react-bootstrap/Carousel";
const Footer = () => {
  return (
    <>
      <div className="footcontainer  mt-5">
        <div className="footpart1">
          <h2>
            Legal{" "}
            <span style={{ fontWeight: "bold", color: "yellow" }}>Dosth</span>
          </h2>
          <div className="footimages">
            {/* <img src={Socc} className="footimage" alt="soccOfficial" /> */}
          </div>
        </div>
        <div className="footpart2">
          <h2>Services</h2>
          <div className="footpart2lists">
            <ul>
              <Link to="">
                <li className="listitem">Advocates</li>
              </Link>
              <Link to="">
                <li className="listitem">Notary</li>
              </Link>
              <Link to="">
                <li className="listitem">Document Writers</li>
              </Link>
              <Link to="">
                <li className="listitem">Arbitaries</li>
              </Link>
              <Link to="">
                <li className="listitem">Legal Advisors</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="footpart3">
          <div className="newsletter">
            <h2>NewsLetter</h2>
            <input type="text" placeholder="Email" />
            <button className="btn-news">Subscribe</button>
          </div>

          <div className="sociallinks">
            <ul>
              <Link to={""}>
                {" "}
                <li className="sociallink">
                  Instagram{" "}
                  <span>
                    <BiLogoInstagram />
                  </span>
                </li>
              </Link>
              <Link to={""}>
                {" "}
                <li className="sociallink">
                  Facebook{" "}
                  <span>
                    <BsFacebook />
                  </span>
                </li>
              </Link>
              <Link to={""}>
                {" "}
                <li className="sociallink">
                  Github{" "}
                  <span>
                    <BiLogoGithub />
                  </span>
                </li>
              </Link>
              <Link to={""}>
                {" "}
                <li className="sociallink">
                  Twitter{" "}
                  <span>
                    <BsTwitter />
                  </span>
                </li>
              </Link>
              <Link to={""}>
                {" "}
                <li className="sociallink">
                  Youtube{" "}
                  <span>
                    <BsYoutube />
                  </span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
