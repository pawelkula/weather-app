import React from 'react';
import { Row, Col } from 'antd';
import Search from '../components/search-input/search-input';

import './homepage.css';

function HomePage() {
  return (
    <Row className="homepage" type="flex" justify="center">
      <Col className="homepage-content">
        <h1 className="homepage-header">Weather App</h1>
        <div className="homepage-subtitle">a very basic weather service</div>
        <Search />
      </Col>
    </Row>
  );
}

export default HomePage;
