import * as React from 'react';
import { Collapse, CardBody, Card, CardHeader } from 'reactstrap';

import SubProject from './SubProject';

export const Accordion = (props: any) => {
  const cards = props.cards.map((card, index) => {
    return (
      <Card color="success" style={{ marginBottom: '1rem' }} key={index + 1}>
        <CardHeader
          style={{ fontWeight: 'bold', fontSize: '18px', paddingBottom: '5px' }}
          onClick={props.toggle}
          data-event={index + 1}
        >
          {card.name}
        </CardHeader>
        <Collapse isOpen={props.collapse === index + 1}>
          <CardBody>
            {props.cards[index].projects.map(item => {
              return (
                <span key={item.id}>
                  <SubProject name={item.name} status="Up" />
                </span>
              );
            })}
          </CardBody>
        </Collapse>
      </Card>
    );
  });
  return <div>{cards}</div>;
};
export default Accordion;
