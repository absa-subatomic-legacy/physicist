import * as React from 'react';
import { Card, CardHeader, Row, Col } from 'reactstrap';

export const Pod = props => {
  return (
    <span>
      <Card>
        <CardHeader>
          <Row>
            <Col md={6}>{props.name}</Col>
            <Col className="text-right" md={6}>
              <i className="fas fa-arrow-up" />
            </Col>
          </Row>
        </CardHeader>
      </Card>
    </span>
  );
};
export default Pod;
