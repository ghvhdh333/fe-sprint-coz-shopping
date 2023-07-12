import Dropdown from "./dropdown"
import "./header.css"


export default function Header () {
    return (
        <header className="header">
            <div className="header_left_section" >
                <img className="logo_icon" src="logo.png" alt="logo"></img>
                <span className="logo_name">COZ Shopping</span>
            </div>
            <img className="bars" src="bars.png" alt="bars"></img>
        </header>
    )
}