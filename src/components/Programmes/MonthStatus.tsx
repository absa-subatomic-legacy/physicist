import * as React from 'react';

import Aux from '../../hoc/Aux';
import { DayStatus } from './DayStatus';

export const MonthStatus = props => {
  const dayData = props.programmeData.map((program, index) => {
    return <DayStatus key={index} position={index * 5} />;
  });

  return (
    <Aux>
      <svg>{dayData}</svg>
    </Aux>
  );
};

export default MonthStatus;
