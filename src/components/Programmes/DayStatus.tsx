import * as React from 'react';
import Aux from '../../hoc/Aux';

export const DayStatus = props => {
  return (
    <Aux>
      <rect
        height="34"
        width="3"
        x={props.position}
        y="0"
        fill="#92c26f"
        data-html="true"
      />
    </Aux>
  );
};
export default DayStatus;
