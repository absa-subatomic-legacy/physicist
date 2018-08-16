import * as React from 'react';
import { MonthStatus } from './MonthStatus';

export const ProgrammeStatus = (props: any) => {
  const programmes = props.programmes.map((program, index) => {
    return (
      <span key={index + 1}>
        <h4>{program.name}!!!!</h4>
        <MonthStatus programmeData={props.programmeData} />
      </span>
    );
  });
  return <div>{programmes}</div>;
};
export default ProgrammeStatus;

{
  /* <Card
className="status-task"
style={{ marginBottom: '1rem' }}
key={index + 1}
onClick={props.toggle}
>
<Alert color="success">
  <CardHeader className="project-" data-event={index + 1}>
    {program.name} <span className="fas fa-check" />
  </CardHeader>
</Alert>
<Collapse isOpen={props.collapse === index + 1}>
  <CardBody>
    <Project projects={program.projects} />
  </CardBody>
</Collapse>
</Card> */
}
