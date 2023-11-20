// import logo from './logo.svg';

import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar.jsx'
import Slide_Swiper from './components/SwiperView.jsx';
import VisualView from './components/VisualView.jsx';
import IntersectView from './components/Intersect.jsx';
import NoticeView from './components/Notice.jsx';
import FooterView from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Slide_Swiper/>
      <VisualView/>
      <IntersectView/>
      <NoticeView/>
      <FooterView/>
    
    </div>
  );
}

export default App;
