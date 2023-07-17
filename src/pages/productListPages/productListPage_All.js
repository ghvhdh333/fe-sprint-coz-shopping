import Product from "../../components/itemBox/product"
import Category from "../../components/itemBox/category"
import Exhibition from "../../components/itemBox/exhibition"
import Brand from "../../components/itemBox/brand"

import React, { useState, useEffect } from "react"
import Filter from "../../components/filter/filter"
import "../pages.css"

export default function ProductListPage_All () {
    // 상품 리스트 상태와 상태 업데이트 함수
    const [productList, setProductList] = useState([])
    
    // api를 통해 카테고리별로 나눈다.
    // 무한스크롤 구현해보기

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
        <main className="main_productListPages">
            <Filter />
            <article >
                <section className="item_list_section">
                    <ul className="item_list_container_productListPages">
                        {/* 각 컴포넌트에 props를 내려준다. */}
                        {productList.map(el => {
                            if(el.type ==='Product'){
                                 return <li><Product key={el.id} title={el.title} image_url={el.image_url} price={el.price} discountPercentage={el.discountPercentage} /></li>
                            }    
                            else if (el.type === 'Category'){
                                return <li><Category key={el.id} title={el.title} image_url={el.image_url}/></li>
                            }
                            else if (el.type === 'Exhibition'){
                                return <li><Exhibition key={el.id} title={el.title} sub_title={el.sub_title} image_url={el.image_url}/></li>
                             }
                            else {
                                return <li>
                                    <Brand key={el.id} brand_name={el.brand_name} image_url={el.brand_image_url} follower={el.follower}/>
                                </li>
                            }
                        })}
                    </ul>    
                </section>
            </article>
        </main>
    )
}