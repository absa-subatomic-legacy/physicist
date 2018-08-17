import * as React from 'react';

import Aux from '../../hoc/Aux';

// import { Tooltip } from 'reactstrap';

class DayStatus extends React.Component<any, any> {
  render() {
    let tooltipMessage =
      this.props.status === 'up'
        ? this.props.date
        : this.props.date + ' - ' + this.props.message;

    let x = tooltipMessage.toString();

    return (
      <Aux>
        <div
          key={this.props.date}
          data-tooltip={x}
          className={
            'rectangle ' +
            (this.props.status === 'up'
              ? 'rectangle-operational'
              : 'rectangle-non-operational ')
          }
        />
      </Aux>
    );
  }
}

export default DayStatus;
