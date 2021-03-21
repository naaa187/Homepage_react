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
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

class Projects extends React.Component {
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
                    Celo팀은 블록체인 기반 오픈 화폐 시스템 구축을 위한 글로벌 연합체 셀로 얼라이언스 (Celo Alliance)와 연관된 프로젝트를 진행하는 팀입니다. 
                  </p>
                  <p>
                    Celo 팀은 현재 Celo Hackathon에 참여하고 있으며 셀로를 개발한 cLabs와 연계하여 셀로 docs 번역 및 개발자들이 쉽게 Celo를 시작할 수 있도록 튜토리얼을 만들 예정입니다. 저희는 금융에서 소외된 사람들과 지속적인 성장, Celo 에서 모토로 삼고 있는 'Prosperity for All' 을 목표로 하여 보다 나은 세상을 위한 서비스/앱 개발을 목표로 하고 있습니다.
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
                  Flow팀은 디지털 자산 오픈 월드의 기반을 추구하는 Flow와 관련된 프로젝트를 진행하는 팀입니다. 
                  </p>
                  <p>
                  Flow팀은 현재 크립토 키티와 NBA Top Shot을 개발한 Flow 블록체인 개발사 대퍼랩스(Dapper Labs)와 커뮤니케이션을 구축하였으며, Flow NFT기반 디지털 자산을 사용자들이 구매 및 거래할 수 있는 새로운 서비스 아이템을 개발하고 있습니다. 저희는 Flow와 함께 NFT를 통한 새로운 크립토 경제 발전 가능성을 탐구하고 진정한 사용자 중심의 디지털 자산을 제공하는 것을 목표로 하고 있습니다.
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

export default Projects;
