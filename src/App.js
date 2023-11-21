// import { useState } from 'react';
import './style.scss';
import {Routes, Route, NavLink} from 'react-router-dom'

function App() {
  const [isActive, setIsActive] = useState(false)

  return (
      <div className="App">
        <nav className='header container'>
          <h1 className='logo'>COM</h1>
          <ul className='menu'>
            {/* NavLink: class='active' */}
            <li><NavLink to="/">home</NavLink></li>  
            <li><NavLink to="/company">company</NavLink></li>
            <li><NavLink to="/product">product</NavLink></li>
            <li><NavLink to="/community">community</NavLink></li>
          </ul>
        </nav> 
        <Routes>
          <Route path='/' element={<div className='container h100 primary'>메인페이지</div>}></Route>
          {/* <Route path='/company' element={<div className='container h100 bg com' style={{backgroundImage:""}}>회사소개페이지입니다.</div>}></Route> */}
          <Route path='/company' element={<div className='container h200 bg com'>회사소개페이지입니다.</div>}></Route>
          <Route path='/product' element={<div className='container h200 bg pro'>제품소개페이지입니다.</div>}></Route>
          <Route path='/community' element={<div className='container h200 bg comm'>소통의 공간입니다</div>}></Route>
        </Routes>
      </div>
  );
}

export default App;
