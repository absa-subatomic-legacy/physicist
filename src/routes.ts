import App from './containers/App';
// import Dashboard from './containers/Dashboard';
import Projects from './containers/Projects';

import Programmes from './containers/Programmes';

export var indexRoutes = [{ path: '/', name: 'Home', component: App }];

export var dashboardRoutes = [
  // {
  //   path: '/dashboard',
  //   name: 'Dashboard',
  //   icon: 'fa-tachometer-alt',
  //   component: Dashboard
  // },
  {
    path: '/projects',
    name: 'Projects',
    icon: 'fa-boxes',
    component: Projects
  },
  {
    path: '/status',
    name: 'Status',
    icon: 'fa-battery-half',
    component: Programmes
  },

  // Add other routes here
  // ...
  // That redirect route must be the last one
  // { redirect: true, path: '/', pathTo: '/dashboard', name: 'Dashboard' },
  { redirect: true, path: '/', pathTo: '/status', name: 'Programmes' }
];
