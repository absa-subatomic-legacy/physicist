import * as React from 'react';
import { createClient } from 'hal-rest-client';
import { ListGroup } from 'reactstrap';

import { ProjectEntity, ProjectEntities } from '../models/Project';

import ProjectCard from '../components/ProjectCard';

interface ProjectEntitiesState {
  projects: ProjectEntity[];
}

class Projects extends React.Component<any, ProjectEntitiesState> {
  client = createClient('/api');

  constructor(props: any) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    this.client
      .fetch('/projectEntities', ProjectEntities)
      .then((entities: ProjectEntities) => {
        this.setState({
          projects: entities.projectEntities
        });
      });
  }

  renderProjects(): JSX.Element {
    const listItems = this.state.projects.map(project => (
      <ProjectCard
        key={project.projectId}
        projectId={project.projectId}
        name={project.name}
        description={project.description}
      />
    ));
    return <div>{listItems}</div>;
  }

  render() {
    return <ListGroup>{this.renderProjects()}</ListGroup>;
  }
}

export default Projects;
