import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Profile from './components/Profile';

const App = () => {
  return (
    <div>
      <ul>
        <li><Link to='/'>홈</Link></li>
        <li><Link to='/about'>소개</Link></li>
        <li><Link to='/profile/velopert'>velopert 프로필</Link></li>
        <li><Link to='/profile/gildong'>gildong 프로필</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/profile/:username' element={<Profile/>}/>
      </Routes>
    </div>
  );
}
export default App;