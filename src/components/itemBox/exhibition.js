import "./itemBox.css";

export default function Exhibition ({title, sub_title, image_url}) {
    return (
        <section>
            <div className="listbox">
                <div className="item_img_div">
                    <img className="item_img" src={image_url} alt={sub_title}></img>
                    <span>
                        <img className="bookmark_icon" src="bookmark_icon_off.png" alt="bookmark_icon_off"></img>
                    </span>
                </div>
                <div className="itemName">{title}</div>
                <div>{sub_title}</div>
            </div>
        </section>
    )
}

// {"id":41,"type":"Exhibition","title":"소중한 내 차를 위해","sub_title":"차량 용품 전문관","brand_name":null,"price":null,"discountPercentage":null,"image_url":"https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80","brand_image_url":null,"follower":null},