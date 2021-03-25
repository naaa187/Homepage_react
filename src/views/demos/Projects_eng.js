import React from "react";
// nodejs library that concatenates classes

// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

class Projects_eng extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }
  render() {
    return (
      <>
        <section className="section section-lg">
          <Container>
            <Row className="row-grid align-items-center">
              <Col className="order-md-2" md="6">
                <img
                  alt="..."
                  className="img-fluid floating"
                  src={require("assets/img/theme/celo.png")}
                />
              </Col>
              <Col className="order-md-1" md="6">
                <div className="pr-md-5">
                  <h4 className="display-3 font-weight-bold">Celo</h4>
                  <p className="lead">
                  Celo team is working on a project related to the Cello Alliance, a global federation for building blockchain-based open currency system. 
                  </p>
                  <p>
                  The Celo team is currently participating in Celo Hackathon and will create a translated version of Celo Docs in conjunction with cLabs -organization developed Celo - to facilitate developers to start Celo. We aim to develop services/apps for people who are alienated from finance and sustainable development following the quote 'Property for All', which is the motto of Celo.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section bg-secondary">
          <Container>
            <Row className="row-grid align-items-center">
              <Col className="order-md-1" md="6">
                <span/>
                <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("assets/img/theme/flow.png")}
                  />
              </Col>
              <Col className="order-md-2" md="6">
                <div className="pl-md-5">
                  <h4 className="display-3 font-weight-bold">Flow</h4>
                  <p className="lead">
                  Flow team is working on a project related to Flow that seeks the foundation of the Digital Asset Open World. 
                  </p>
                  <p>
                  The Flow team has established communication with Flow blockchain developer team called Dapper Labs, which developed Crypto Kitties and NBA Top Shot. Currently, we are developing new service items for user to purchase and trade Flow NFT-based digital assets. We aim to explore the potential for new crypto economic development with NFT and deliver truly user-friendly digital assets.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section> 
      </>
    );
  }
}

export default Projects_eng;
