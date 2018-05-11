import * as React from 'react';
import { Row, Col } from 'reactstrap';
import { Pods } from './Pods';

export const SubProject = props => {
  const projects = props.projects.map((item, index) => {
    return (
      <span key={item.id}>
        <Row>
          <Col md={6}>
            {item.name}
            <Row>
              <Col md={6}>
                {props.projects[index].pods.map(pod => {
                  return (
                    <span key={pod.id}>
                      <Pods name={pod.name} status="Up" />
                    </span>
                  );
                })}
              </Col>
            </Row>
          </Col>
          <Col md={6}>{item.status}</Col>
        </Row>
      </span>
    );
  });

  return <span>{projects}</span>;
};

export default SubProject;
