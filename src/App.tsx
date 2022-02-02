import { Link, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Profiles from './components/Profiles';

const App = () => {
  return (
    <div>
      <ul>
        <li><Link to='/'>홈</Link></li>
        <li><Link to='/about'>소개</Link></li>
        <li><Link to='/profiles/'>프로필</Link></li>
      </ul>
      <Route path="/" exact component={Home}/>
      <Route path={['/about', '/info']} component={About}/>
      <Route path='/profiles' component={Profiles}/>
    </div>
  );
}
export default App;