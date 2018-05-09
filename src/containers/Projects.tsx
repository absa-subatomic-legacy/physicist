import * as React from 'react';
import { createClient } from 'hal-rest-client';
import { Row, Col, CardDeck } from 'reactstrap';

import { PanelHeader, ProjectCard } from '../components';

import { ProjectEntity, ProjectEntities } from '../models/Project';

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
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col xs={12}>
              <CardDeck>{this.renderProjects()}</CardDeck>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Projects;
