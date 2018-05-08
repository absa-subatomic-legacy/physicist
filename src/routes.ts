import Dashboard from './containers/Dashboard';

export var indexRoutes = [{ path: '/', name: 'Home', component: Dashboard }];

export var dashboardRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'design_app',
    component: Dashboard
  }
];
