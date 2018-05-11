import * as React from 'react';

import { PanelHeader } from '../components';
import { Programme } from '../components/Programmes/Programme';

class Programmes extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      collapse: 0,
      cards: [
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
      ]
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
          <Programme
            cards={this.state.cards}
            toggle={this.toggleEventHandler}
            collapse={this.state.collapse}
          />
        </div>
      </div>
    );
  }
}

export default Programmes;
