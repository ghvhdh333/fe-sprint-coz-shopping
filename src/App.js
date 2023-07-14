import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './base.css';

import Header from './components/header';
import MainPage from './pages/mainPage';
import ProductListPage from './pages/productListPage';
import BookmarkListPage from './pages/bookmarkListPage';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path="/productList" element={<ProductListPage />} />
                <Route path="/bookmarkList" element={<BookmarkListPage />}/>
            </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
