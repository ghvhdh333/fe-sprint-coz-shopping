import "./itemBox.css";

export default function Brand ({brand_name, image_url, follower}) {
    return (
        <section>
            <div className="listbox">
                <div className="item_img_div">
                    <img className="item_img" src={image_url} alt="brand_item"></img>
                    <span>
                        <img className="bookmark_icon" src="bookmark_icon_off.png" alt="bookmark_icon_off"></img>
                    </span>
                </div>
                <ul className="itemName">
                    <li>{brand_name}</li>
                    <li>관심고객수</li>
                </ul>
                <div className="likedNum">{Number(follower).toLocaleString()}</div>
            </div>
        </section>
    )
}

// {"id":60,"type":"Brand","title":null,"sub_title":null,"brand_name":"아디다스","price":null,"discountPercentage":null,"image_url":null,"brand_image_url":"https://images.unsplash.com/photo-1511746315387-c4a76990fdce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80","follower":9023},