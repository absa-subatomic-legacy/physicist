import * as React from 'react';
// javascript plugin used to create scrollbars on windows
// import PerfectScrollbar from 'perfect-scrollbar';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Header, Footer, Sidebar } from '../components';

import * as routes from '../routes';

// var ps;

class Dashboard extends React.Component<any, any> {
  // componentDidMount(){
  //     if(navigator.platform.indexOf('Win') > -1){
  //         ps = new PerfectScrollbar(this.refs.mainPanel);
  //         document.body.classList.toggle("perfect-scrollbar-on");
  //     }
  // }
  // componentWillUnmount(){
  //     if(navigator.platform.indexOf('Win') > -1){
  //         ps.destroy();
  //         document.body.classList.toggle("perfect-scrollbar-on");
  //     }
  // }
  // componentDidUpdate(e) {
  //   if(e.history.action === "PUSH"){
  //     this.refs.mainPanel.scrollTop = 0;
  //     document.scrollingElement.scrollTop = 0;
  //   }
  // }

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

export default Dashboard;
