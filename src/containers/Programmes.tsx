import * as React from 'react';

import { PanelHeader } from '../components';
// import { Programme } from '../components/Programmes/Programme';

import { ProgrammeStatus } from '../components/Programmes/ProgramStatus';

class Programmes extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    let programmeData: any[] = [];
    for (let i = 0; i < 90; i++) {
      let dayInfo = {
        status: 'up',
        type: 'normal', // major / minor
        message: '10 min downtown'
      };
      programmeData.push(dayInfo);
    }

    this.state = {
      collapse: 0,
      programmes: [
        {
          name: 'Infrastructure',
          projects: [
            {
              id: 1,
              name: 'Bitbucket',
              status: 'Up',
              pods: []
            },
            {
              id: 2,
              name: 'Nexus',
              status: 'Up',
              pods: [
                {
                  id: 1,
                  name: 'scdf'
                },
                {
                  id: 2,
                  name: 'config server'
                }
              ]
            }
          ]
        },
        {
          name: 'DebiCheck',
          projects: [
            {
              name: 'CMS',
              status: 'Up',
              pods: [
                {
                  id: 1,
                  name: 'scdf'
                },
                {
                  id: 2,
                  name: 'config server'
                }
              ]
            },
            {
              name: 'RMS',
              status: 'Up',
              pods: [
                {
                  id: 1,
                  name: 'scdf'
                },
                {
                  id: 2,
                  name: 'config server'
                }
              ]
            },
            {
              name: 'Post-Payments',
              status: 'Up',
              pods: [
                {
                  id: 1,
                  name: 'scdf'
                },
                {
                  id: 2,
                  name: 'config server'
                }
              ]
            },
            {
              name: 'Batch',
              status: 'Up',
              pods: [
                {
                  id: 1,
                  name: 'scdf'
                },
                {
                  id: 2,
                  name: 'config server'
                }
              ]
            }
          ]
        }
      ],
      programmeData
    };
  }

  toggleEventHandler = (e: any) => {
    let event = e.target.dataset.event;
    this.setState({
      collapse: this.state.collapse === Number(event) ? 0 : Number(event)
    });
    // tslint:disable-next-line:semicolon
  };

  render() {
    return (
      <div>
        <PanelHeader size="xs" />
        <div className="content">
          <ProgrammeStatus
            programmes={this.state.programmes}
            programmeData={this.state.programmeData}
            toggle={this.toggleEventHandler}
          />
          {/* <Programme
            programmes={this.state.programmes}
            toggle={this.toggleEventHandler}
            collapse={this.state.collapse}
          /> */}
        </div>
      </div>
    );
  }
}

export default Programmes;
