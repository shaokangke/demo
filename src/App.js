import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import "./index.css";
// import Home from './pages/home';
// import HooksDemo from './pages/hooks_demo'
import First from "./pages/first";
import Second from "./pages/second";
import Third from "./pages/third";
import Fourth from "./pages/fourth";
import Fifth from "./pages/fifth";
import Sixth from "./pages/sixth";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      {/* <Home/>
      <HooksDemo/> */}
      <Router>
        <div>
          <div className="ksk">
            <NavLink activeClassName="active" to="/First">
              <div className="head">折线图</div>
            </NavLink>
            <NavLink activeClassName="active" to="/Second">
              <div className="head">柱状图</div>
            </NavLink>
            <NavLink activeClassName="active" to="/Third">
              <div className="head">饼图</div>
            </NavLink>
            <NavLink activeClassName="active" to="/Fourth">
              <div className="head">散点图</div>
            </NavLink>
            <NavLink activeClassName="active" to="/Fifth">
              <div className="head">气泡图</div>
            </NavLink>
            <NavLink activeClassName="active" to="/Sixth">
              <div className="head">雷达图</div>
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

            <Route exact path="/First">
              <First />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
      {/* <Router>
        <div>
          <div>
            <Link to="/First">折线图</Link>
          </div>
          <div>
            <Link to="/Second/ID=12">柱状图</Link>
          </div>
          <div>
            <Link to="/Third">饼图</Link>
          </div>
          <div>
            <Link to="/Fourth">散点图</Link>
          </div>
          <div>
            <Link to="/Fifth">气泡图</Link>
          </div>
          <div>
            <Link to="/Sixth">雷达图</Link>
          </div>
        </div>
        <Route path="/First" component={First} />
        <Route path="/Second" component={Second} />
        <Route path="/Third" component={Third} />
        <Route path="/Fourth" component={Fourth} />
        <Route path="/Fifth" component={Fifth} />
        <Route path="/Sixth" component={Sixth} />v
      </Router> */}
    </div>
  );
}

export default App;
