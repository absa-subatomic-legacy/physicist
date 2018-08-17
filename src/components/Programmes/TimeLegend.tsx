import * as React from 'react';

export const TimeLegend = props => {
  return (
    <div className="legend ">
      <div className="legend-item light legend-item-date-range">
        <span className="availability-time-line-legend-day-count">
          {props.daysToShow}
        </span>{' '}
        days ago
      </div>
      <div className="spacer" />
      <div className="legend-item legend-item-uptime-value">
        <span id="uptime-percent-trr4n2y4h9yx">99.91</span> % uptime
      </div>
      <div className="spacer" />
      <div className="legend-item light legend-item-date-range">Today</div>
    </div>
  );
};
