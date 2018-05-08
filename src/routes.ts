import App from './containers/App';
import Dashboard from './containers/Dashboard';

export var indexRoutes = [{ path: '/', name: 'Home', component: App }];

export var dashboardRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'fa-tachometer-alt',
    component: Dashboard
  },
  // Add other routes here
  // ...
  // That redirect route must be te last one
  { redirect: true, path: '/', pathTo: '/dashboard', name: 'Dashboard' }
];
