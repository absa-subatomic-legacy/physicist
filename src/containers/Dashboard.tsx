import * as React from 'react';
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  CardBody,
  CardFooter
} from 'reactstrap';

// react plugin used to create charts
import { Line, Bar } from 'react-chartjs-2';

import { PanelHeader, Stats, CardCategory, ProjectsStats } from '../components';

// function that returns a color based on an interval of numbers
import {
  dashboardPanelChart,
  dashboardShippedProductsChart,
  dashboardAllProductsChart,
  dashboard24HoursPerformanceChart
} from '../variables/charts';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <PanelHeader
          size="lg"
          content={
            <Line
              data={dashboardPanelChart.data}
              options={dashboardPanelChart.options}
            />
          }
        />
        <div className="content">
          <Row>
            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <CardCategory>Global States</CardCategory>
                  <CardTitle>All Projects</CardTitle>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-round btn-simple btn-icon"
                      color="default"
                    >
                      <i className="fas fa-cog" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                      <DropdownItem className="text-danger">
                        Remove data
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={dashboardShippedProductsChart.data}
                      options={dashboardShippedProductsChart.options}
                    />
                  </div>
                </CardBody>
                <CardFooter>
                  <Stats>{[{ i: 'fas fa-sync', t: 'Just Updated' }]}</Stats>
                </CardFooter>
              </Card>
            </Col>

            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <CardCategory>2018 States</CardCategory>
                  <CardTitle>All Teams</CardTitle>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-round btn-simple btn-icon"
                      color="default"
                    >
                      <i className="fas fa-cog" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                      <DropdownItem className="text-danger">
                        Remove data
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={dashboardAllProductsChart.data}
                      options={dashboardAllProductsChart.options}
                    />
                  </div>
                </CardBody>
                <CardFooter>
                  <Stats>{[{ i: 'fas fa-sync', t: 'Just Updated' }]}</Stats>
                </CardFooter>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <CardCategory>Email Statistics</CardCategory>
                  <CardTitle>24 Hours Performance</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Bar
                      data={dashboard24HoursPerformanceChart.data}
                      options={dashboard24HoursPerformanceChart.options}
                    />
                  </div>
                </CardBody>
                <CardFooter>
                  <Stats>
                    {[{ i: 'fas fa-calendar-alt', t: 'Last 7 days' }]}
                  </Stats>
                </CardFooter>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={12}>
              <ProjectsStats />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Dashboard;
