import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Loader from './componants/Loader';
import Header from './componants/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import './index.scss';
import Footer from './componants/Footer';
import Project from './pages/Project';
import Error from './pages/Error'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Router>
      {/* <Loader /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projet/:url" element={<Project />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
      <Footer />
   </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
