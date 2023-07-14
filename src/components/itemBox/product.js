import "./itemBox.css";

export default function Product ({title, image_url, price, discountPercentage}) {
    return (
        <section>
            <div className="listbox">
                <div className="item_img_div">
                    <img className="item_img" src={image_url} alt="product_item"></img>
                    <span>
                        <img className="bookmark_icon" src="bookmark_icon_off.png" alt="bookmark_icon_off"></img>
                    </span>
                </div>
                <ul className="itemName">
                    <li>{title}</li>
                    <li className="discountPercent">{discountPercentage}%</li>
                </ul>
                <div className="price">{Number(price).toLocaleString()}원</div>
            </div>
        </section>
    )
}