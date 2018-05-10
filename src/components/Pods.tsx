import * as React from 'react';
import { Row, Col } from 'reactstrap';

export const Pods = props => {
  return (
    <span>
      <Row>
        <Col md={6}>{props.name}</Col>
        <Col md={6}>{props.status}</Col>
      </Row>
    </span>
  );
};
export default Pods;
