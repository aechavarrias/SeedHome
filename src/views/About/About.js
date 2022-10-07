import React, { Component } from "react";
import Fade from "react-reveal";
import logo_sin_letras from "../../static/images/Logos/logo_sin_letras.png";

class About extends Component {
  render() {

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={logo_sin_letras}
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>

              <p>Seedhome</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>SeddHome</span>
                    <br />
                    <span>
                        1600 Amphitheatre Parkway
                      <br />
                        Mountain View, CA 94043 US
                    </span>
                    <br />
                    <span>+569 5251 4867</span>
                    <br />
                    <span>alfredo.echavarria@seedhome.cl</span>
                  </p>
                </div>
                <div className="columns download">
                  {/* <p>
                    <a href={resumeDownload} className="button">
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;