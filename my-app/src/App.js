import React from 'react';
import styled from 'styled-components'
import { BrowserRouter, Routers, Router } from 'react-router-dom';
import './App.css';
import './base.css';

import Header from './components/header';
import Main from './pages/main';
import Footer from './components/footer';
import Dropdown from './components/dropdown';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Main></Main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
