import * as React from 'react';

import {
  Card,
  CardTitle,
  CardHeader,
  CardFooter,
  CardBody,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import { Stats } from '../components';

import { Project } from '../models/Project';

class ProjectCard extends React.Component<Project, any> {
  constructor(props: Project) {
    super(props);
  }

  onViewButtonClick(): void {
    alert(`View project with ${this.props.projectId}`);
  }

  render() {
    return (
      <Card className="card-chart">
        <CardHeader>
          <CardTitle>{this.props.name}</CardTitle>
          <UncontrolledDropdown>
            <DropdownToggle
              className="btn-round btn-simple btn-icon"
              color="default"
            >
              <i className="fas fa-cog" />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem onClick={() => this.onViewButtonClick()}>
                View
              </DropdownItem>
              <DropdownItem>Empty Action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
              <DropdownItem className="text-danger">Remove data</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </CardHeader>
        <CardBody>
          <div className="chart-area">{this.props.description}</div>
        </CardBody>
        <CardFooter>
          <Stats>{[{ i: 'fas fa-sync', t: 'Just Updated' }]}</Stats>
        </CardFooter>
      </Card>
    );
  }
}

export default ProjectCard;
