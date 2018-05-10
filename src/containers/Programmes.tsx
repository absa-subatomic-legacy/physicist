import * as React from 'react';

import { PanelHeader } from '../components';
import { Accordion } from '../components/Accordion';

class Programmes extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      collapse: 0,
      cards: ['Infrastructure', 'DebiCheck', 'Pangea', 'Morongwa', 'Fortriss']
    };
  }

  toggleEventHandler = (e: any) => {
    let event = e.target.dataset.event;
    this.setState({
      collapse: this.state.collapse === Number(event) ? 0 : Number(event)
    });
    // tslint:disable-next-line:semicolon
  };

  render() {
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Accordion
            cards={this.state.cards}
            toggle={this.toggleEventHandler}
            collapse={this.state.collapse}
          />
        </div>
      </div>
    );
  }
}

export default Programmes;
