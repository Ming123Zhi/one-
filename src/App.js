import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink,Switch,Redirect } from 'react-router-dom'
import AboutUs from './components/aboutus'
import One from './components/one'
import Music from './components/music'
import Article from './components/article'
import Apps from './components/apps'
import Movie from './components/movie'
import Details from './components/details'
import './css/reset.css'
import './css/border.css'
import './css/common.css'
import { Provider } from "react-redux";
import store from "./store";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div id="box"> 
            <Switch>
                <Route path="/one" component={One} />
                <Route path="/article" component={Article} />
                <Route path="/music" component={Music} />
                <Route path="/movie" component={Movie} />
                <Route path="/apps" component={Apps} />
                <Route path="/aboutus" component={AboutUs} />
                <Route path="/details" component={Details} />
                <Redirect path="/" to="/one"/>
            </Switch>
          <div className="nav">
              <ul>
                <li><NavLink to="/one">图文</NavLink></li>
                <li><NavLink to="/article">阅读</NavLink></li>
                <li><NavLink to="/music">音乐</NavLink></li>
                <li><NavLink to="/movie">影视</NavLink></li>
                <li><NavLink to="/apps">App下载</NavLink></li>
                <li><NavLink to="/aboutus">关于</NavLink></li>
              </ul>
            </div>
          
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
