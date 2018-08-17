import * as React from 'react';

import DayStatus from './DayStatus';
import { TimeLegend } from './TimeLegend';

import * as moment from 'moment';

export const OperationalDayStatus = props => {
  let statusList: any[] = [];

  let dayData;
  for (let i = 0; i < props.daysToShow; i++) {
    let dayInfo = {
      status: 'up',
      type: 'normal', // major / minor
      message: '',
      date: ''
    };

    let statusDate = moment()
      .subtract(i, 'day')
      .format('LL');
    props.status.map((dayStatus, index) => {
      if (
        moment(dayStatus.date).isSame(statusDate, 'month') &&
        moment(dayStatus.date).isSame(statusDate, 'day')
      ) {
        dayInfo.status = 'down';
        dayInfo.type = dayStatus.type;
        dayInfo.message = dayStatus.message;
      }
    });
    dayInfo.date = statusDate.toString();
    statusList.push(dayInfo);
  }

  statusList.reverse();
  dayData = statusList.map((day, j) => {
    return (
      <DayStatus
        key={j}
        date={day.date}
        status={day.status}
        message={day.message}
      />
    );
  });

  return (
    <div className="dayInfo">
      <div className="dayData">{dayData}</div>
      <div className="timeLegend">
        <TimeLegend daysToShow={props.daysToShow} />
      </div>
    </div>
  );
};
export default OperationalDayStatus;
