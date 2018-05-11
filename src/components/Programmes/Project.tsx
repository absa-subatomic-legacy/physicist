import * as React from 'react';
import { CardBody, Card, CardHeader } from 'reactstrap';

import { Pod } from './Pod';

export const Project = props => {
  const projects = props.projects.map((item, index) => {
    return (
      <span key={item.id}>
        <Card className="project-card">
          <CardHeader className="project-card-header">{item.name}</CardHeader>
          <CardBody>
            {props.projects[index].pods.map(pod => {
              return (
                <span key={index + pod.id}>
                  <Pod name={pod.name} status="Up" />
                </span>
              );
            })}
          </CardBody>
        </Card>
      </span>
    );
  });

  return <span>{projects}</span>;
};

export default Project;
