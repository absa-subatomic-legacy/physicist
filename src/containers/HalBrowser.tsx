import * as React from 'react';
import { createClient, HalResource } from 'hal-rest-client';

// import { Table } from 'reactstrap';

class HalBrowser extends React.Component<any, any> {
  client = createClient('/api');

  constructor(props: any) {
    super(props);
    this.state = { projects: [] };
  }

  componentDidMount() {
    this.client
      .fetchResource('/projectEntities')
      .then((resource: HalResource) => {
        this.setState({
          projects: resource.prop('projectEntities')
        });
      });
  }

  render() {
    return (
      <div>
        Test
        <ul>
          <li>{this.state.projects}</li>
        </ul>
      </div>
    );
  }
}

export default HalBrowser;
