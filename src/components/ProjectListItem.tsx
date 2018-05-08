import * as React from 'react';

import { ListGroupItem } from 'reactstrap';

import { Project } from '../models/Project';

class ProjectListItem extends React.Component<Project, any> {
  constructor(props: Project) {
    super(props);
  }

  render() {
    return (
      <ListGroupItem
        tag="a"
        href={'/api/projects/' + this.props.projectId}
        action
      >
        {this.props.name}
      </ListGroupItem>
    );
  }
}

export default ProjectListItem;
