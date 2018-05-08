import * as React from 'react';

import { Card, CardTitle, CardText, CardLink } from 'reactstrap';

import { Project } from '../models/Project';

class ProjectCard extends React.Component<Project, any> {
  constructor(props: Project) {
    super(props);
  }

  onViewButtonClick(): void {
    alert(`Click on ${this.props.projectId}`);
  }

  render() {
    return (
      <Card body className="text-center">
        <CardTitle>{this.props.name}</CardTitle>
        <CardText>{this.props.description}</CardText>
        <CardLink href={`/project/${this.props.projectId}`}>View</CardLink>
      </Card>
    );
  }
}

export default ProjectCard;
