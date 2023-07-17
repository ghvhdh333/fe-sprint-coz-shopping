import Exhibition from "../../components/itemBox/exhibition"
import React, { useState, useEffect } from "react"
import Filter from "../../components/filter/filter"
import "../pages.css"

export default function ProductListPage_Exhibition () {
    // 상품 리스트 상태와 상태 업데이트 함수
    const [productList, setProductList] = useState([])
    
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
                        {productList.map((el) => {
                            if(el.type ==='Exhibition'){
                                return <li className="item"> 
                                        <Exhibition key={el.id} title={el.title} sub_title={el.sub_title} image_url={el.image_url} />
                                </li>
                            }
                        })}
                    </ul>
                </section>
            </article>
        </main>
    )
}

// {"id":41,"type":"Exhibition","title":"소중한 내 차를 위해","sub_title":"차량 용품 전문관","brand_name":null,"price":null,"discountPercentage":null,"image_url":"https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80","brand_image_url":null,"follower":null},