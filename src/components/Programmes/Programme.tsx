import * as React from 'react';
import { Collapse, CardBody, Card, CardHeader } from 'reactstrap';
import { Alert } from 'reactstrap';

import Project from './Project';

export const Programme = (props: any) => {
  const programmes = props.programmes.map((program, index) => {
    return (
      <Card
        className="status-task"
        style={{ marginBottom: '1rem' }}
        key={index + 1}
        onClick={props.toggle}
      >
        <Alert color="success">
          <CardHeader className="project-" data-event={index + 1}>
            {program.name} <span className="fas fa-check" />
          </CardHeader>
        </Alert>
        <Collapse isOpen={props.collapse === index + 1}>
          <CardBody>
            <Project projects={program.projects} />
          </CardBody>
        </Collapse>
      </Card>
    );
  });
  return <div>{programmes}</div>;
};
export default Programme;
