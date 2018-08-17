import * as React from 'react';
import { Collapse } from 'reactstrap';

import ProjectMain from './ProjectMain';

export const ProgrammeMain = (props: any) => {
  const programmes = props.programmes.map((program, index) => {
    let operationalMessage = program.operational ? (
      <span className="float-right ">Operational</span>
    ) : (
      <span className="float-right fas">Not Operational</span>
    );
    return (
      <div className="programme-block" key={index + 1} onClick={props.toggle}>
        <div className="programme-block-header" data-event={index + 1}>
          {program.name} {operationalMessage}
        </div>

        <Collapse isOpen={true}>
          <div>
            <ProjectMain
              projects={program.projects}
              daysToShow={props.daysToShow}
            />
          </div>
        </Collapse>
      </div>
    );
  });
  return <div>{programmes}</div>;
};
export default ProgrammeMain;
