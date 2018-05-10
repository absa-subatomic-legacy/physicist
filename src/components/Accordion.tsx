import * as React from 'react';
import { Collapse, CardBody, Card, CardHeader } from 'reactstrap';

export const Accordion = (props: any) => {
  const cards = props.cards.map((card, index) => {
    return (
      <Card style={{ marginBottom: '1rem' }} key={index + 1}>
        <CardHeader onClick={props.toggle} data-event={index + 1}>
          {card}
        </CardHeader>
        <Collapse isOpen={props.collapse === index + 1}>
          <CardBody>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </CardBody>
        </Collapse>
      </Card>
    );
  });
  return <div>{cards}</div>;
};
export default Accordion;
