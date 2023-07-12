import "./itemBox.css";

export default function Product () {
    return (
        <section>
            <div className="listbox">
                <div className="item_img_div">
                    <img className="item_img" src="example_product_item.png" alt="product_item"></img>
                    <span>
                        <img className="bookmark_icon" src="bookmark_icon_off.png" alt="bookmark_icon_off"></img>
                    </span>
                </div>
                <ul className="itemName">
                    <li>상품 이름</li>
                    <li className="discount">00%</li>
                </ul>
                <div className="price">상품 가격</div>
            </div>
        </section>
    )
}