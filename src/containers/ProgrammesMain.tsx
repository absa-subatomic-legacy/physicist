import * as React from 'react';

import { OperationalStatus } from '../components/Programmes/OperationalStatus';
import { ProgrammeMain } from '../components/Programmes/ProgrammeMain';
import { PanelHeader } from '../components';
// // import { Programme } from '../components/Programmes/Programme';

// import { ProgrammeStatus } from '../components/Programmes/ProgramStatus';

class ProgrammesMain extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
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
              name: 'BitBucket',
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
              id: 2,
              name: 'Openshift Non Prod A',
              operational: true,
              status: [
                {
                  date: '3 Aug 2018 12:05',
                  status: 'up'
                },
                {
                  date: '7 Aug 2018 14:36',
                  status: 'up'
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
                  date: '7 Aug 2018 14:36',
                  status: 'up'
                }
              ]
            }
          ]
        }
      ],
      systemsOperational: true
    };
  }

  render() {
    return (
      <div>
        <PanelHeader size="xs" />
        <div className="content">
          <OperationalStatus
            systemsOperational={this.state.systemsOperational}
          />
          <ProgrammeMain programmes={this.state.programmes} />
        </div>
      </div>
    );
  }
}

export default ProgrammesMain;
