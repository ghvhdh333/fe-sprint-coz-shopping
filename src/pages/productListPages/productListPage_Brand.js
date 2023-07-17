import Brand from "../../components/itemBox/brand"
import React, { useState, useEffect } from "react"
import Filter from "../../components/filter/filter"
import "../pages.css"

export default function ProductListPage_Brand () {
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
                            if(el.type ==='Brand'){
                                return <li className="item"> 
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