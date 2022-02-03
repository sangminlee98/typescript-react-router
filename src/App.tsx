import { Link, Route, Routes } from 'react-router-dom';
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
        <li><Link to='/profiles'>프로필</Link></li>
        <li><Link to='/navigate'>Navigate 예제</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/profiles/*' element={<Profiles/>}/>
        <Route path='/navigate' element={<HistorySample/>} />
      </Routes>
    </div>
  );
}
export default App;