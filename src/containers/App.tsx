import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Header, Footer, Sidebar } from '../components';

import * as routes from '../routes';

class App extends React.Component<any, any> {
  getMainPanel() {
    return 'mainPanel';
  }

  render() {
    return (
      <div className="wrapper">
        <Sidebar {...this.props} routes={routes.dashboardRoutes} />
        <div className="main-panel" ref={this.getMainPanel()}>
          <Header {...this.props} />
          <Switch>
            {routes.dashboardRoutes.map((prop: any, key) => {
              if (prop.collapse) {
                return prop.views.map((prop2, key2) => {
                  return (
                    <Route
                      path={prop2.path}
                      component={prop2.component}
                      key={key2}
                    />
                  );
                });
              }
              if (prop.redirect) {
                return <Redirect from={prop.path} to={prop.pathTo} key={key} />;
              }
              return (
                <Route path={prop.path} component={prop.component} key={key} />
              );
            })}
          </Switch>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
