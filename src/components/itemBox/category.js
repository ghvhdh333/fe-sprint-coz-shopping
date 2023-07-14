import "./itemBox.css";

export default function Category () {
    return (
        <section>
            <div className="listbox">
                <div className="item_img_div">
                    <img className="item_img" src="example_category_item.png" alt="category_item"></img>
                    <span>
                        <img className="bookmark_icon" src="bookmark_icon_off.png" alt="bookmark_icon_off"></img>
                    </span>
                </div>
                <div className="itemName"># 카테고리 이름</div>
            </div>
        </section>
    )
}