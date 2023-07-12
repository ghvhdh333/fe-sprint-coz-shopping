import "./itemBox.css";

export default function Exhibition () {
    return (
        <section>
            <div className="listbox">
                <div className="item_img_div">
                    <img className="item_img" src="example_exhibition_item.png" alt="exhibition_item"></img>
                    <span>
                        <img className="bookmark_icon" src="bookmark_icon_off.png" alt="bookmark_icon_off"></img>
                    </span>
                </div>
                <div className="itemName">기획전 이름</div>
                <div>기획전 설명</div>
            </div>
        </section>
    )
}