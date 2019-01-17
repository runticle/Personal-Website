import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Homepage from '../components/homepage/Homepage'
import Blog from '../components/Blog'
import Projects from '../components/projects/Projects'
import Contact from '../components/Contact'
import createHistory from 'history/createBrowserHistory'

export const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
    <div className="container-fluid">
      <Switch>
        <Route path="/" component={Homepage} exact={true}/>
        <Route path="/projects" component={Projects} exact={true}/>
        <Route path="/contact" component={Contact} exact={true}/>
        <Route path="/blog" component={Blog} exact={true}/>
      </Switch>
    </div>
  </Router>
)

export default AppRouter;
