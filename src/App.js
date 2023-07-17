import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './base.css';

import Header from './components/header/header';
import MainPage from './pages/mainPage';
import ProductListPage_All from './pages/productListPages/productListPage_All';
import BookmarkListPage from './pages/bookmarkListPages/bookmarkListPage_All';
import Footer from './components/footer/footer'
import ProductListPage_Product from './pages/productListPages/productListPage_Product';
import ProductListPage_Category from './pages/productListPages/productListPage_Category';
import ProductListPage_Exhibition from './pages/productListPages/productListPage_Exhibition';
import ProductListPage_Brand from './pages/productListPages/productListPage_Brand';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path="/productList" element={<ProductListPage_All />} />
                <Route path="/productList/product" element={<ProductListPage_Product/>} />
                <Route path="/productList/category" element={<ProductListPage_Category/>} />
                <Route path="/productList/exhibition" element={<ProductListPage_Exhibition/>} />
                <Route path="/productList/brand" element={<ProductListPage_Brand/>} />


                <Route path="/bookmarkList" element={<BookmarkListPage />}/>

            </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
