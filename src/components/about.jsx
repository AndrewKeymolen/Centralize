import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about" id="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      {/*<span className="heading-meta">About Me</span>*/}
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>
                        Having grown up with a computer in the house, I got bitten by the IT bug very early on. At age 10, I was working on a first terrible website that would thankfully never see the light of day. At age 14, Windows didn't hold any more secret for me as I could fix any problem I probably was the cause of. At age 16, I discovered programming in Pascal and it kickstarted a passion that is still very much alive today.
                      </p>
                      <p>
                        That passion eventually got me to graduate in Business Computing, topping that off with a Student Exchange in Finland at the end of my final year of study. Back in Belgium, I decided a steady knowledge in modern technologies would help me with my desired career path so I chose to do an internship in Android development. I spent five months working on creating an Android app from scratch that would eventually receive an award for its quality. Strong of that experience, and with my degree in Business Computing in hands, I joined Adneom Luxembourg, now rebranded Positive Thinking Company.
                      </p>
                      <p>
                        Thanks to them, I started working with Spuerkeess as an IT consultant, participating in everything from simple maintenance to high stake projects at a national scale, some of which I even helped manage.
                      </p>
                      <p>
                        Eventually, I was also offered to oversee some projects in our dev team, which shifted my career goals: I began wanting to make good use of my technical skills and knowledge and start managing projects. In order to do so, I certified as a SCRUM Master and successfully transitioned to being a fully fledged SCRUM Master at Spuerkeess. One year of experience later, I certified as an Agile Project Manager.
                      </p>
                      <p>
                        Now, I'm an experienced, motivated freelance Project Manager and SCRUM Master with an advanced technical background, eager to collaborate with you and show you the value I can bring to your next project. Ready? Then{" "}
                        <span id="navbar">
                          <a href="" data-nav-section="contact">
                            contact me
                          </a>
                        </span>
                        !
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col-md-3 animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="services color-3">
                      <span className="icon2">
                        <i className="icon-bulb"></i>
                      </span>
                      <h3>Agile Project Manager</h3>
                    </div>
                  </div>
                  <div
                    className="col-md-3 animate-box"
                    data-animate-effect="fadeInRight"
                  >
                    <div className="services color-2">
                      <span className="icon2">
                        <i className="icon-arrow-loop"></i>
                      </span>
                      <h3>SCRUM Master</h3>
                    </div>
                  </div>
                  <div
                    className="col-md-3 animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="services color-1">
                      <span className="icon2">
                        <i className="icon-data"></i>
                      </span>
                      <h3>Full Stack Dev</h3>
                    </div>
                  </div>
                  <div
                    className="col-md-3 animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="services color-4">
                      <span className="icon2">
                        <i className="icon-globe-outline"></i>
                      </span>
                      <h3>Web & Multimedia</h3>
                    </div>
                  </div>

                </div>
                {/*}                <div className="row">
                <div
                className="col-md-12 animate-box"
                data-animate-effect="fadeInLeft"
                >
                <div className="hire">
                <h2>
                I am happy to know you <br />
                that 300+ projects done sucessfully!
                </h2>
                <a href="#" className="btn-hire">
                Hire me
                </a>
                </div>
                </div>
                </div>
                */}{" "}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
