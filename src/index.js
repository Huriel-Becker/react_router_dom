import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import reportWebVitals from './reportWebVitals';
import { Home } from './components/Home/index.tsx';
import { About } from './components/About/index.tsx';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Menu } from './components/Menu/index.tsx';
import { Post } from './components/Post/index.tsx';
import { Redirect } from './components/Redirect/index.tsx';
import { NotFound } from './components/NotFound/index.tsx';
import { Posts } from './components/Posts/index.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post" element={<Post />} />
        {/* <Route path="/post/:id" element={<Post />} /> */}
        <Route path="/post/" element={<Post />}>
          <Route path=':id' element={<Posts />} />
        </ Route>
        <Route path="/redirect" element={<Redirect />} />
        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
