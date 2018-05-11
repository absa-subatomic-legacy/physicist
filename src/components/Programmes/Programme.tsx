import * as React from 'react';
import { Collapse, CardBody, Card, CardHeader } from 'reactstrap';
import { Alert } from 'reactstrap';

import Project from './Project';

export const Programme = (props: any) => {
  const cards = props.cards.map((card, index) => {
    return (
      <Card
        className="status-task"
        style={{ marginBottom: '1rem' }}
        key={index + 1}
        onClick={props.toggle}
      >
        <Alert color="success">
          <CardHeader
            style={{
              fontWeight: 'bold',
              fontSize: '18px'
            }}
            data-event={index + 1}
          >
            {card.name} <span className="fas fa-check" />
          </CardHeader>
        </Alert>
        <Collapse isOpen={props.collapse === index + 1}>
          <CardBody>
            <Project projects={card.projects} />
          </CardBody>
        </Collapse>
      </Card>
    );
  });
  return <div>{cards}</div>;
};
export default Programme;
