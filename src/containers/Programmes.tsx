import * as React from 'react';
import { Collapse, CardBody, Card, CardHeader } from 'reactstrap';

import { PanelHeader } from '../components';

class Programmes extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      collapse: 0,
      cards: ['Infrastructure', 'DebiCheck', 'Pangea', 'Morongwa', 'Fortriss']
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(e: any) {
    let event = e.target.dataset.event;
    this.setState({
      collapse: this.state.collapse === Number(event) ? 0 : Number(event)
    });
  }
  render() {
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          {this.state.cards.map((card, index) => {
            return (
              <Card style={{ marginBottom: '1rem' }} key={index + 1}>
                <CardHeader onClick={this.toggle} data-event={index + 1}>
                  {card}
                </CardHeader>
                <Collapse isOpen={this.state.collapse === index + 1}>
                  <CardBody>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.
                  </CardBody>
                </Collapse>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Programmes;
