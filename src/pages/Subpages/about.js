import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Card, CardBody } from "reactstrap";
import Particles from "react-particles-js";
import { withTranslation } from "react-i18next";

import img1 from "../../images/team/img-1.jpg";
import img2 from "../../images/team/img-2.jpg";
import img3 from "../../images/team/img-3.jpg";
import img4 from "../../images/team/img-4.jpg";
import img5 from "../../images/team/img-5.jpg";
import img6 from "../../images/team/img-6.jpg";
import img7 from "../../images/team/img-7.jpg";
import img8 from "../../images/team/img-8.jpg";
import img9 from "../../images/team/img-9.jpg";




class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
	this.t=this.props.t;
  }

  componentDidMount() {
    document.body.classList.add("bg-account-pages");
    document.body.classList.add("py-4");
    document.body.classList.add("py-sm-0");
  }
  render() {
    return (
        
      <React.Fragment>

<Particles
          canvasClassName="particlesjs"
          params={{
            particles: {
              number: {
                value: 200,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: "#ffffff",
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000",
                },
                polygon: {
                  nb_sides: 5,
                },
              },
              opacity: {
                value: 0,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 1,
                  sync: false,
                },
              },
              size: {
                value: 5,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 4,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "bounce",
                bounce: true,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
                onclick: {
                  enable: true,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 0.5,
                },
                repulse: {
                  distance: 80,
                  duration: 0.5,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }}
        />
        

        <Card
          style={{ marginTop: "5vh",marginBottom:"5vh", marginLeft:"10vw", marginRight:"10vw", backgroundColor: "rgba(255, 255, 255, 0.7)" }}
        >
          <CardBody className="card-body">
            <div className="account-home-btn d-none d-sm-block">
              <Link to="/">
                <i className="mdi mdi-arrow-left-bold-hexagon-outline h1"></i>
              </Link>
            </div>
            <div className="text-center mt-3">
              <h3
                className="font-weight-bold"
                className="text-dark text-uppercase account-pages-logo"
              >
			  {this.t('NEQ')}
              </h3>
            </div>
            <div className="p-3">
              <div className="container-fluid margin-t-50">
                <div className="row">
                  <div className="col">
                    <div className="text-center">
                      <div className="team-wrapper">
                        <div
                          className="team-member"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <div
                            style={{
                              backgroundImage: `url(${img1})`,
                              backgroundSize: "cover",
                              width: "150px",
                              height: "150px",
                              backgroundPosition: "center",
                            }}
                          ></div>
                        </div>
                      </div>
                      <h4 className="team-name">Juan Felipe</h4>
                      <h5 className="text-uppercase">{this.t('DC')}</h5>
                      <p className="team-designation">
                        {this.t('JF')}{" "}
                      </p>
                    </div>
                  </div>

                  <div className="col">
                    <div className="text-center">
                      <div className="team-wrapper">
                        <div
                          className="team-member"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <div
                            style={{
                              backgroundImage: `url(${img2})`,
                              backgroundSize: "cover",
                              width: "150px",
                              height: "150px",
                              backgroundPosition: "center",
                            }}
                          ></div>
                        </div>
                      </div>
                      <h4 className="team-name">Laura</h4>
                      <h5 className="text-uppercase">{this.t('DA')}</h5>
                      <p className="team-designation">
                       {this.t('L')}{" "}
                      </p>
                    </div>
                  </div>

                  <div className="col">
                    <div className="text-center">
                      <div className="team-wrapper">
                        <div
                          className="team-member"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <div
                            style={{
                              backgroundImage: `url(${img3})`,
                              backgroundSize: "cover",
                              width: "150px",
                              height: "150px",
                              backgroundPosition: "center",
                            }}
                          ></div>
                        </div>
                      </div>
                      <h4 className="team-name">Yiby</h4>
                      <h5 className="text-uppercase">{this.t('ML')}</h5>
                      <p className="team-designation">
                        {this.t('Y')}{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="text-center">
                      <div className="team-wrapper">
                        <div
                          className="team-member"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <div
                            style={{
                              backgroundImage: `url(${img5})`,
                              backgroundSize: "200px",
                              width: "150px",
                              height: "150px",
                              backgroundPosition: "50% 3%",
                            }}
                          ></div>
                        </div>
                      </div>
                      <h4 className="team-name">Leonardo</h4>
                      <h5 className="text-uppercase">{this.t('DC')}</h5>
                      <p className="team-designation">
                       {this.t('LE')}
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="text-center">
                      <div className="team-wrapper">
                        <div
                          className="team-member"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <div
                            style={{
                              backgroundImage: `url(${img6})`,
                              backgroundSize: "250px",
                              width: "150px",
                              height: "150px",
                              backgroundPosition: "50% 35%",
                            }}
                          ></div>
                        </div>
                      </div>
                      <h4 className="team-name">Humberto</h4>
                      <h5 className="text-uppercase">{this.t('ES')}</h5>
                      <p className="team-designation">
                        {this.t('H')}
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="text-center">
                      <div className="team-wrapper">
                        <div
                          className="team-member"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <div
                            style={{
                              backgroundImage: `url(${img7})`,
                              backgroundSize: "cover",
                              width: "150px",
                              height: "150px",
                              backgroundPosition: "center",
                            }}
                          ></div>
                        </div>
                      </div>
                      <h4 className="team-name">Carlos</h4>
                      <h5 className="text-uppercase">{this.t('DN')}</h5>
                      <p className="team-designation">{this.t('CA')}</p>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className=" text-center">
                      <div className="team-wrapper">
                        <div
                          className="team-member"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <div
                            style={{
                              backgroundImage: `url(${img4})`,
                              backgroundSize: "cover",
                              width: "150px",
                              height: "150px",
                              backgroundPosition: "center",
                            }}
                          ></div>
                        </div>
                      </div>
                      <h4 className="team-name">Jose</h4>
                      <h5 className="text-uppercase">t{('GC')}</h5>
                      <p className="team-designation">
                        t{('SD')}
                      </p>
                    </div>
                  </div>

                  <div className="col">
                    <div className="text-center">
                      <div className="team-wrapper">
                        <div
                          className="team-member"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <div
                            style={{
                              backgroundImage: `url(${img8})`,
                              backgroundSize: "150px",
                              width: "150px",
                              height: "150px",
                              backgroundPosition: "50% 1%",
                            }}
                          ></div>
                        </div>
                      </div>
                      <h4 className="team-name">Alejandra</h4>
                      <h5 className="text-uppercase">{this.t('CC')}</h5>
                      <p className="team-designation">{this.t('MQ')}</p>
                    </div>
                  </div>

                  <div className="col">
                    <div className="text-center">
                      <div className="team-wrapper">
                        <div
                          className="team-member"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <div
                            style={{
                              backgroundImage: `url(${img9})`,
                              backgroundSize: "200px",
                              width: "150px",
                              height: "150px",
                              backgroundPosition: "center",
                            }}
                          ></div>
                        </div>
                      </div>
                      <h4 className="team-name">Julian</h4>
                      <h5 className="text-uppercase">{this.t('DP')}</h5>
                      <p className="team-designation">{this.t('M')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default withTranslation()(About);
