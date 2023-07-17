import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import ProductListPage_All from '../../pages/productListPages/productListPage_All';
import ProductListPage_Product from '../../pages/productListPages/productListPage_Product';
import ProductListPage_Category from '../../pages/productListPages/productListPage_Category';
import ProductListPage_Exhibition from '../../pages/productListPages/productListPage_Exhibition';
import ProductListPage_Brand from '../../pages/productListPages/productListPage_Brand';

import './filter.css';

export default function Filter () {
    return (
        // filter 이미지 액박표시 뜨는 것 어떻게 처리하는지 모르겠음 ㅠㅠ..
        // filter Link로 /productList?type=product 이런식으로 하고 싶은데 하는 방법을 모르겠음 저렇게하면 연결이안됨..

        // 전체 상품 중 선택한 데이터만 보여준다.
        <nav>
            <section className='filter_container'>
                <Link to="/productList" element={<ProductListPage_All/>}>
                    <div className='filter_item'>
                        <img className='filter_item_img' src='filter_All.png' alt='filter_All_img' />
                        <div className='filter_strong_font'>전체</div>
                    </div>
                </Link>
                <Link to="/productList/product" element={<ProductListPage_Product />}>
                    <div className='filter_item'>
                        <img className='filter_item_img' src='filter_product.png' alt='filter_product_img' />
                        <div>상품</div>
                    </div>
                </Link>
                <Link to="/productList/category" element={<ProductListPage_Category />}>
                    <div className='filter_item'>
                        <img className='filter_item_img' src='filter_category.png' alt='filter_category_img' />
                        <div>카테고리</div>
                    </div>
                </Link>
                <Link to="/productList/exhibition" element={<ProductListPage_Exhibition />}>
                    <div className='filter_item'>
                        <img className='filter_item_img' src='filter_exhibition.png' alt='filter_exhibition_img' />
                        <div>기획전</div>
                    </div>
                </Link>
                <Link to="/productList/brand" element={<ProductListPage_Brand />}>
                    <div className='filter_item_brand'>
                        <img className='filter_item_img' src='filter_brand.png' alt='filter_brand_img' />
                        <div>브랜드</div>
                    </div>
                </Link>
            </section>
        </nav>
    )
}