import Product from "../components/itemBox/product"
import Category from "../components/itemBox/category"
import Exhibition from "../components/itemBox/exhibition"
import Brand from "../components/itemBox/brand"

import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import "./mainPage.css"
import React, { useState, useEffect } from "react"

export default function MainPage () {
    // 상품 리스트 상태와 상태 업데이트 함수
    const [productList, setProductList] = useState([])
    const [bookmarkList, setBookmarkList] = useState([])
    
    // 서버에서 데이터 받아오기 (o)
    // api를 통해 카테고리별로 나눈다. (x), 나중에 구현해보기
    
    // let URL = 'http://cozshopping.codestates-seb.link/api/v1/products?type=brand'로 하면 type이 brand인 데이터만 불러온다.
    
    useEffect(() => {
        let URL = 'http://cozshopping.codestates-seb.link/api/v1/products'
        
        // fetch, then, catch 사용해서 표현
        fetch(URL)
        // URL에 get 요청을 보낸 데이터를 성공적으로 응답받아 JSON 데이터로 변환한다.
        .then(res => res.json())
        // 성공적으로 변환된 JSON 데이터를 JS 배열로 변환해서 가져오며, productList의 상태를 업데이트 한다.
        .then(jsonData => setProductList(jsonData))
        // URL에 get 요청을 보냈지만 성공적으로 데이터를 가져오지 못한 경우 Error를 발생시킨다.
        .catch(error => console.log('Internet Server Error', error))
    }, [])  // [] <- 첫 렌더링에만 useEffect가 실행된다.



    return (
        <main className="main">
                {/* // App => Main => useState (상태 생성) => useEffect => render(return) => 빈 배열 렌더링 => fetch  => 데이터를 받아오고 
                => useState의 상태 갱신 함수 setProduct(데이터) => 어? 상태 데이터가 바뀌었네? 
                => 컴포넌트를 재렌더링 => 비로소 products들이 보였다. */}


            <article >
                mainpage
                <section className="item_list_section">
                    <h2 className="item_list_title">상품 리스트</h2>
                    <ul className="item_list_container">
                        {/* 새로고침할 때마다 다른 상품리스트를 보여주는 방법은 없나.. */}
                        <li>{productList.map((el, index) => {
                            if(el.type ==='Product'){
                                return <Product key={el.id} title={el.title} image_url={el.image_url} price={el.price} discountPercentage={el.discountPercentage}></Product>
                            }
                        })}</li>
                        <li><Category /></li>
                        <li><Exhibition /></li>
                        <li><Brand /></li>
                    </ul>
                </section>
                <section>
                    <h2 className="item_list_title">북마크 리스트</h2>
                    <ul className="item_list_container">
                        <li><Product /></li>
                        <li><Category /></li>
                        <li><Exhibition /></li>
                        <li><Brand /></li>
                    </ul>
                </section>
            </article>
        </main>
    )
}