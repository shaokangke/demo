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
import Fourth from './pages/fourth'
import Fifth from './pages/fifth'
import Sixth from './pages/sixth'





function App() {
  return (
    <div className="App">
      {/* <Home/>
      <HooksDemo/> */}
      <Router>
        <div>
          <div className="ksk">
            <NavLink activeClassName='active' to="/First">
              <div className='head'>折线图</div>
            </NavLink>
            <NavLink activeClassName='active' to="/Second">
              <div className='head'>柱状图</div>
            </NavLink>
            <NavLink activeClassName='active' to="/Third">
              <div className='head'>饼图</div>
            </NavLink>
            <NavLink activeClassName='active' to="/Fourth">
              <div className='head'>散点图</div>
            </NavLink>
            <NavLink activeClassName='active' to="/Fifth">
              <div className='head'>气泡图</div>
            </NavLink>
            <NavLink activeClassName='active' to="/Sixth">
              <div className='head'>雷达图</div>
            </NavLink>
          </div>


          <Switch>

            <Route path="/Third">
              <Third />
            </Route>

            <Route path="/Second">
              <Second />
            </Route>
            <Route path="/Fourth">
              <Fourth />
            </Route>
            <Route path="/Fifth">
              <Fifth />
            </Route>
            <Route path="/Sixth">
              <Sixth />
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
