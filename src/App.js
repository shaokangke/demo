import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import './index.css';
// import Home from './pages/home';
// import HooksDemo from './pages/hooks_demo'
import First from './pages/first'
import Second from './pages/second'
import Third from './pages/third'




function App() {
  return (
    <div className="App">
      {/* <Home/>
      <HooksDemo/> */}
      <Router>
        <div>
          <div className="ksk">
            <NavLink activeClassName='active' to="/First">
              <div className='head'>首页</div>
            </NavLink>
            <NavLink activeClassName='active' to="/Second">
              <div className='head'>新闻</div>
            </NavLink>
            <NavLink activeClassName='active' to="/Third">
              <div className='head'>游戏</div>
            </NavLink>
          </div>


          <Switch>

            <Route path="/Third">
              <Third />
            </Route>

            <Route path="/Second">
              <Second />
            </Route>

            <Route path="/">
              <First />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
