/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

class AboutUs_eng extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <main className="profile-page" ref="main">
          <section className="section section-lg bg-secondary">
            <Container>
              <Row className="justify-content-md-center my-9">
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                  <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/brand/ewha-chain-logo.png")}
                  />
                  </div>
                </Col>
                <Col className="align-items-center justify-content-center row" lg={{size: "auto"}}>
                  <h1 className="display-2">×</h1>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                  <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/brand/YBL-logo.png")}
                  />
                  </div>
                </Col>
                <Col className="justify-content-md-center">
                <div className="text-center justify-content-center row">
                  <h4 className="display-3">B
                    <small className="text muted">lockchain{" "}</small>
                  </h4>
                  <h4 className="display-3"> E
                    <small className="text muted">wha</small>
                  </h4>
                  <h4 className="display-3"> Y
                    <small className="text muted">onsei</small>
                  </h4>
                  <h4 className="display-3"> OND</h4>
                  <p className="text-gray">
                    blahblahblah
                  </p>
                </div>
              </Col>
              </Row>
            </Container>
          </section>
        </main>
      </>
    );
  }
}

export default AboutUs_eng;
