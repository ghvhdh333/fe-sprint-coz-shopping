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

// {"id":58,"type":"Product","title":"싱글브레스트 코트","sub_title":null,"brand_name":null,"price":"149000","discountPercentage":30,"image_url":"https://images.unsplash.com/photo-1514813836041-518668f092b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80","brand_image_url":null,"follower":null},