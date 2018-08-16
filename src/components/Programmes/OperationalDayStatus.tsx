import * as React from 'react';

import Aux from '../../hoc/Aux';
import { DayStatus } from './DayStatus';

import * as moment from 'moment';

export const OperationalDayStatus = props => {
  let statusList: any[] = [];
  let dayInfo = {
    status: 'up',
    type: 'normal', // major / minor
    message: '10 min down',
    date: ''
  };
  let dayData;

  for (let i = 0; i < 2; i++) {
    let statusDate = moment().subtract(i, 'day');
    props.status.map((dayStatus, index) => {
      if (
        moment(dayStatus.date).isSame(statusDate, 'month') &&
        moment(dayStatus.date).isSame(statusDate, 'day')
      ) {
        dayInfo.status = 'down';
      }
    });
    dayInfo.date = statusDate.toString();
    statusList.push(dayInfo);
  }

  dayData = statusList.map((day, j) => {
    return <DayStatus key={j} position={j * 5} />;
  });

  return (
    <Aux>
      <svg className="status-time-line">{dayData}</svg>
    </Aux>
  );
};

export default OperationalDayStatus;
