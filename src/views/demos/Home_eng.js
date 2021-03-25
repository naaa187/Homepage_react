import React from "react";

// reactstrap components
import {
  Container,
  Col
} from "reactstrap";

class Home_eng extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-hero section-shaped">
            {/* Background circles */}
              <Container className="shape-container page-header">
                  <Col className="text-center" lg="6">
                    <img
                      alt="..."
                      className="img-fluid"
                      src={require("assets/img/brand/BEYOND_main.png")}
                      style={{ width: "400px" }}
                    />
                    <p className="h4 text-white">The future of blockchain community with combined universities</p>
                  </Col>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-secondary"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
        </main>
      </>
    );
  }
}

export default Home_eng;