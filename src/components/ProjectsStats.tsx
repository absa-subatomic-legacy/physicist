import * as React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Table,
  CardFooter
} from 'reactstrap';

import { Stats } from '../components';

class ProjectsStats extends React.Component<any, any> {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Projects Stats</CardTitle>
          <p className="category">All Projects List</p>
        </CardHeader>
        <CardBody>
          <Table responsive>
            <thead className=" text-primary">
              <tr>
                <th>Name</th>
                <th>Status</th>
                <th className="text-right">Failed</th>
                <th className="text-right">Stats</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Simple</td>
                <td>Online</td>
                <td className="text-right">2</td>
                <td className="text-right">22</td>
              </tr>
              <tr>
                <td>Simple2 </td>
                <td>Offline</td>
                <td className="text-right">2</td>
                <td className="text-right">22</td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
        <CardFooter>
          <hr />
          <Stats>
            {[{ i: 'fas fa-sync fa-spin', t: 'Updated 3 minutes ago' }]}
          </Stats>
        </CardFooter>
      </Card>
    );
  }
}

export default ProjectsStats;
