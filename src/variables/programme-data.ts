const programmeData = [
  {
    id: 1,
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
    id: 2,
    name: 'DebiCheck',
    projects: [
      {
        id: 1,
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
        id: 2,
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
        id: 3,
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
];

const projectData = [
  {
    id: 1,
    programmeId: 1,
    data: [
      {
        id: 1,
        name: 'Bitbucket',
        status: 'Up',
        pods: []
      },
      {
        id: 2,
        name: 'Nexus',
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
    id: 2,
    programmeId: 2,
    data: [
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
];

const projectUpTimeData = [
  {
    programme: 'Infrastructure',
    projectData: [
      {
        name: 'Bitbucket',
        statusChecks: [
          {
            date: '2018-01-01 10:00:00',
            status: 'up',
            projectName: 'Bitbucket',
            projectId: 1,
            podId: null
          },
          {
            id: 2,
            date: '2018-01-02 10:00:00',
            status: 'up',
            projectName: 'Bitbucket',
            projectId: 1,
            podId: null
          },
          {
            id: 3,
            date: '2018-01-01 00:20:00',
            status: 'up',
            projectId: 1,
            projectName: 'Bitbucket',
            podId: null
          },
          {
            id: 4,
            date: '2018-01-01 00:30:00',
            status: 'up',
            projectName: 'Bitbucket',
            projectId: 1,
            podId: null
          }
        ]
      }
    ]
  }
];

export { programmeData, projectData, projectUpTimeData };
