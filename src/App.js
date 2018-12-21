import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink,Switch,Redirect } from 'react-router-dom'
import AboutUs from './components/about/aboutus'
import One from './components/one/one'
import Music from './components/music/music'
import Article from './components/article/article'
import Apps from './components/apps/apps'
import Movie from './components/movie/movie'
import Details from './components/details'
import './css/reset.css'
import './css/border.css'
import './css/common.css'
import { Provider } from "react-redux";
import store from "./store";

import Bscroll from 'better-scroll';

// json-server --routes -route.json -ajax.json -p 5000
class App extends Component {
  constructor () {
    super ();
    this.state = {
      flag: true,
      navflag: true
    }
    this.handleNavList = this.handleNavList.bind(this);
    this.handleBox = this.handleBox.bind(this);
    this.handleSeek = this.handleSeek.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }
  render() {
    let {flag,navflag} = this.state;
    return (
      <Provider store={store}>
        <Router>
          <div>
            <div onClick={this.handleBox} className="conent-warp" ref="wrapper">
            <div> 
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
            </div>
            </div>

             {/*蒙版*/}
            <div className="boxmsg" style={{display:navflag?"none":"block"}}></div>

            <div className="header" >
              <div className="nav-title">
                <span className="nav-icon-left" 
                      onClick={this.handleNavList}>{/*点击显示左边导航列表*/}
                <i className="iconfont">&#xe606;</i>     
                </span>
                <p>一个阅读</p>
                <span className="nav-icon-right"
                      onClick={this.handleSeek}>{/*点击搜索*/}
                  <i className="iconfont">&#xe60b;</i>
                </span>
              </div>
              {/*搜索框*/}
              <div className="nav-seek" style={{display:navflag?"none":""}}>
                <div className="nav-input">
                  <input type="text" placeholder="输入作者或者标题关键字"/>
                </div>  
                <span ><i className="iconfont ss">&#xe60b;</i></span>
                {/*返回*/}
                <span onClick={this.handleBack}><i className="iconfont">&#xe624;</i></span>
              </div>    




            <div className="nav-list" style={{display:flag?"none":"block"}}>
              <ul>
                <li onClick={this.handleBox}><NavLink to="/one">图文</NavLink></li>
                <li onClick={this.handleBox}><NavLink to="/article">阅读</NavLink></li>
                <li onClick={this.handleBox}><NavLink to="/music">音乐</NavLink></li>
                <li onClick={this.handleBox}><NavLink to="/movie">影视</NavLink></li>
                <li onClick={this.handleBox}><NavLink to="/apps">App下载</NavLink></li>
                <li onClick={this.handleBox}><NavLink to="/aboutus">关于</NavLink></li>
              </ul>
            </div>
          </div>
          </div>
        </Router>
      </Provider>
    );
  }

   //隐藏和显示左边导航列表的判断
  handleNavList (e) {
    e.stopPropagation();
    this.setState({
      flag: false
    })
  }
  handleBox () {
    this.setState({
      flag: true
    })
  }
  //展示搜索框
  handleSeek () {
    this.setState({
      navflag: false
    })
  }
  handleBack () {
    this.setState({
      navflag: true
    })
  }
  //用better-scroll实现页面拖动，有弹性的效果
  componentDidMount () {
    this.scroll = new Bscroll(this.refs.wrapper,{click:true});
  }
}

export default App;
