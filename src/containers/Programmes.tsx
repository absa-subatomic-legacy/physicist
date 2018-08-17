import * as React from 'react';

import { OperationalStatus } from '../components/Programmes/OperationalStatus';
import { Programme } from '../components/Programmes/Programme';
import { PanelHeader } from '../components';

import * as moment from 'moment';
// // import { Programme } from '../components/Programmes/Programme';

// import { ProgrammeStatus } from '../components/Programmes/ProgramStatus';

class Programmes extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      systemsOperational: true,
      daysToShow: this.calculateDaysToShow('01 Jan 2018'),
      programmes: [
        {
          name: 'Infrastructure',
          operational: true,
          timeFrame: 30,
          projects: [
            {
              id: 1,
              name: 'Nexus',
              operational: true,
              status: [
                {
                  date: '10 Aug 2018 08:45',
                  type: 'minor',
                  message: '20 minutes of downtime'
                },
                {
                  date: '14 Aug 2018 10:41',
                  type: 'major',
                  message: '2 hours of downtime'
                }
              ]
            },
            {
              id: 2,
              name: 'BitBucket',
              operational: true,
              status: [
                {
                  date: '30 May 2018 12:05',
                  type: 'minor',
                  message: '12 minutes of downtime'
                },
                {
                  date: '8 July 2018 14:36',
                  type: 'minor',
                  message: '5 minutes of downtime'
                }
              ]
            },
            {
              id: 2,
              name: 'Openshift Non Prod A',
              operational: true,
              status: [
                {
                  date: '3 July 2018 12:05',
                  type: 'minor',
                  message: '10 minutes of downtime'
                },
                {
                  date: '4 July 2018 14:36',
                  type: 'major',
                  message: '4 minutes of downtime'
                }
              ]
            }
          ]
        },
        {
          name: 'DebiCheck',
          operational: true,
          projects: [
            {
              id: 1,
              name: 'CMS',
              operational: true,
              status: [
                {
                  date: '10 Aug 2018 08:45',
                  status: 'down'
                },
                {
                  date: '14 Aug 2018 10:41',
                  status: 'down'
                }
              ]
            },
            {
              id: 2,
              name: 'Post Payments',
              operational: true,
              status: [
                {
                  date: '3 Aug 2018 12:05',
                  status: 'down'
                },
                {
                  date: '7 Aug 2018 14:36',
                  status: 'down'
                }
              ]
            },
            {
              id: 3,
              name: 'Openshift Non Prod A',
              status: [
                {
                  date: '3 Aug 2018 12:05',
                  status: 'up'
                },
                {
                  date: '17 Aug 2018 14:36',
                  status: 'up'
                }
              ]
            }
          ]
        }
      ]
    };
  }

  calculateDaysToShow = startDate => {
    let daysCalculated = moment().diff(startDate, 'days');
    if (daysCalculated < 90) {
      return daysCalculated;
    } else {
      return 90;
    }
  };

  render() {
    return (
      <div>
        <PanelHeader size="xs" />
        <div className="content">
          <OperationalStatus
            systemsOperational={this.state.systemsOperational}
          />
          <Programme
            programmes={this.state.programmes}
            daysToShow={this.state.daysToShow}
          />
        </div>
      </div>
    );
  }
}

export default Programmes;
