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
import { Button, Card, Container, Row, Col, CardImg, CardBody, Badge } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

class AboutUs extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>

        <main className="profile-page" ref="main">
            <div className="text-center">
                <h1 className="display-3">Contact Us</h1>
              </div>
          <section className="footer has-cards">
            <Container>
              <Row className="justify-content-center align-items-start">
                <Col className="mb-5 mb-md-0" md="5">
                  <Card className="shadow border-0">
                    <CardBody className="py-5 text-center">
                      <img
                        alt="..."
                        className="img-center img-fluid"
                        src={require("assets/img/theme/celo.png")}
                        width="200"
                      />
                      <h6 className="text-primary text-uppercase">
                        Celo Team
                          </h6>
                      <p className="description mt-3">
                        eocnd thrormf Tjwntpdy
                          </p>
                      <div className="text-lg-center btn-wrapper">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="secondary"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-envelope-o" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-2"
                          color="twitter"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-2"
                          color="github"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-github" />
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col className="mb-5 mb-md-0" md="5">
                  <Card className="shadow border-0">
                    <CardBody className="py-5 text-center">
                      <img
                        alt="..."
                        className="img-center img-fluid my-2"
                        src={require("assets/img/theme/flow.png")}
                        width="184"
                      />
                      <h6 className="text-primary text-uppercase">
                        Flow Team
                          </h6>
                      <p className="description mt-3">
                        eocnd thrormf Tjwntpdy
                          </p>
                      <div className="text-lg-center btn-wrapper">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="secondary"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-envelope-o" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-2"
                          color="twitter"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-2"
                          color="github"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-github" />
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row className="my-6">
              </Row> 
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default AboutUs;
