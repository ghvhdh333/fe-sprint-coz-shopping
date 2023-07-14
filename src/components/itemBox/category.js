import "./itemBox.css";

export default function Category ({title, image_url}) {
    return (
        <section>
            <div className="listbox">
                <div className="item_img_div">
                    <img className="item_img" src={image_url} alt="category_item"></img>
                    <span>
                        <img className="bookmark_icon" src="bookmark_icon_off.png" alt="bookmark_icon_off"></img>
                    </span>
                </div>
                <div className="itemName">{title}</div>
            </div>
        </section>
    )
}

// {"id":3,"type":"Category","title":"커피","sub_title":null,"brand_name":null,"price":null,"discountPercentage":null,"image_url":"https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80","brand_image_url":null,"follower":null},