import * as React from 'react';

export const OperationalStatus = (props: any) => {
  const status = props.systemsOperational ? (
    <div className="ops-status ops-active">Systems Operational</div>
  ) : (
    <div className="ops-status ops-inactive">
      All systems are not Operational
    </div>
  );
  return <div>{status}</div>;
};
export default OperationalStatus;
