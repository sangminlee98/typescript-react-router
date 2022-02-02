import { Link, Route } from 'react-router-dom';
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
      <Route path="/" exact component={Home}/>
      <Route path={['/about', '/info']} component={About}/>
      <Route path='/profiles' component={Profiles}/>
      <Route path='/history' component={HistorySample}/>
    </div>
  );
}
export default App;