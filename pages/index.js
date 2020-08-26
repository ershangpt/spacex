import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Main from '../scripts/components/main';
import Sidebar from '../scripts/components/sidebar';
import Footer from '../scripts/components/footer';





function Index() {
  return (
    <div className="App">
      <React.Fragment>
        <h3>SpaceX Launch Program</h3>
        <Container>
          <Row>
            <Col xs={12} md={2} sm={3}>
              <Sidebar />
            </Col>
            <Col sm={9} md={10} xs={12}>
              <Main />
            </Col>
          </Row>
        </Container>
        <Footer/>
      </React.Fragment>
    </div>
  );
}

export default Index;
