import "./itemBox.css";

export default function Brand () {
    return (
        <section>
            <div className="listbox">
                <div className="item_img_div">
                    <img className="item_img" src="example_brand_item.png" alt="brand_item"></img>
                    <span>
                        <img className="bookmark_icon" src="bookmark_icon_off.png" alt="bookmark_icon_off"></img>
                    </span>
                </div>
                <ul className="itemName">
                    <li>브랜드 이름</li>
                    <li>관심고객수</li>
                </ul>
                <div className="likedNum">00,000</div>
            </div>
        </section>
    )
}