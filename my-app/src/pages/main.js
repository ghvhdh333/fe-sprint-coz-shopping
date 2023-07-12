import Product from "../components/itemBox/product"
import Category from "../components/itemBox/category"
import Exhibition from "../components/itemBox/exhibition"
import Brand from "../components/itemBox/brand"

import "./main.css"


import Dropdown from "../components/dropdown"

export default function Main () {
    return (
        <main className="main">
            <article >
                <section className="item_list_section">
                    <h2 className="item_list_title">상품 리스트</h2>
                    <ul className="item_list_container">
                        <li><Product /></li>
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