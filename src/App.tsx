import { Link, Route, RouteComponentProps, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About';
import HistorySample from './components/HistorySample';
import Home from './components/Home';
import Profiles from './components/Profiles';

const App = () => {
  return (
    <div>
      <ul>
        <li><Link to='/'>홈</Link></li>
        <li><Link to='/about'>소개</Link></li>
        <li><Link to='/profiles/'>프로필</Link></li>
        <li><Link to='/history'>History 예제</Link></li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path={['/about', '/info']} component={About}/>
        <Route path='/profiles' component={Profiles}/>
        <Route path='/history' component={HistorySample}/>
        <Route
          render={({location}: RouteComponentProps) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다:</h2>
              <p>{location.pathname}</p>
            </div>
          )}  
        />
      </Switch>
    </div>
  );
}
export default App;