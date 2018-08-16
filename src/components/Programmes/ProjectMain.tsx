import * as React from 'react';
import { OperationalDayStatus } from './OperationalDayStatus';

export const ProjectMain = (props: any) => {
  const programmes = props.projects.map((project, index) => {
    let operationalMessage = project.operational ? (
      <span className="float-right operational ">Operational</span>
    ) : (
      <span className="float-right non-operational">Not Operational</span>
    );
    return (
      <div className="project-block" key={index + 1}>
        {project.name}
        {operationalMessage}
        <OperationalDayStatus status={project.status} />
      </div>
    );
  });
  return <div>{programmes}</div>;
};
export default ProjectMain;
