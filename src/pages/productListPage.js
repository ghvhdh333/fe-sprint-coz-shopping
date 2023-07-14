import Product from "../components/itemBox/product"
import React, { useState, useEffect } from "react"
import "./productListPage.css"

export default function ProductListPage () {
    // 상품 리스트 상태와 상태 업데이트 함수
    const [productList, setProductList] = useState([])
    
    // 서버에서 데이터 받아오기 (o)
    // api를 통해 카테고리별로 나눈다. (x), 나중에 구현해보기
    
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
            전체 productList page 구현 중
            <article >
                <section className="item_list_section">
                    <h2 className="item_list_title">상품 리스트</h2>
                    <ul className="item_list_container">
                        <li>{productList.map((el, index) => {
                            if(el.type ==='Product'){
                                return <Product key={el.id} title={el.title} image_url={el.image_url} price={el.price} discountPercentage={el.discountPercentage}></Product>
                            }
                        })}</li>
                    </ul>
                </section>
            </article>
        </main>
    )
}