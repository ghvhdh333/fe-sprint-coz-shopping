import Dropdown from "./dropdown"
import "./header.css"
import { Link } from "react-router-dom"
import MainPage from "../pages/mainPage"
import { useState } from "react"

export default function Header () {

    // 드롭다운 상태 정의
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // 드롭다운 핸들러 정의 (bars의 상태가 true이면 드롭다운이 나오고, false이면 드롭다운이 사라진다.)
    const dropdownHandler = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    return (
        <header className="header">
            {/* 헤더의 로고와 이름을 눌리면 Link를 통해 main page로 이동한다. */}
            <div className="header_left_section" >        
                <Link to="/" element={<MainPage />}><img className="logo_icon" src="logo.png" alt="logo" /></Link>
                <Link to="/" element={<MainPage />}><span className="logo_name">COZ Shopping</span></Link>
            </div>
            {/* bars를 클릭하면 드롭다운이 나오고, 다시 한번 클릭하면 드롭다운이 사라지게 한다. */}
            <div onClick={dropdownHandler} >
                <img className="bars" src="bars.png" alt="bars" />
                {isDropdownOpen ? <Dropdown /> : null}
            </div>
        </header>
    )
}