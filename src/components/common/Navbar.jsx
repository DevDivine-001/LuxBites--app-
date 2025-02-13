import { useState } from "react"
import { assets } from "../../assets/frontend_assets/assets"

const Navbar = () => {
    const [Menu, setMenu] = useState("home")
    return (
        <header className="flex justify-center items-center w-full h-[12vh]  top-0 z-20 sticky bg-[#fff] shadow-md">
            <div className="flex justify-between items-center w-[88%]">
                <img src={assets.logo} alt="" />
                <ul className="flex space-x-8 justify-center items-center text-[#49557e] text-[17px] cursor-pointer max-md:hidden xl:flex max-lg:hidden">
                    <ul className="flex space-x-8 justify-center items-center text-[#49557e] text-[17px] cursor-pointer">
                        <li
                            onClick={() => setMenu("home")}
                            className={`pb-1 border-b-2 transition-all duration-300 ease-in-out ${Menu === "home" ? "border-[#49557e] font-semibold" : "border-transparent"}`}
                        >
                            Home
                        </li>
                        <li
                            onClick={() => setMenu("menu")}
                            className={`pb-1 border-b-2 transition-all duration-300 ease-in-out ${Menu === "menu" ? "border-[#49557e] font-semibold" : "border-transparent"}`}
                        >
                            Menu
                        </li>
                        <li
                            onClick={() => setMenu("mobile app")}
                            className={`pb-1 border-b-2 transition-all duration-300 ease-in-out ${Menu === "mobile app" ? "border-[#49557e] font-semibold" : "border-transparent"}`}
                        >
                            Mobile App
                        </li>
                        <li
                            onClick={() => setMenu("contact us")}
                            className={`pb-1 border-b-2 transition-all duration-300 ease-in-out ${Menu === "contact us" ? "border-[#49557e] font-semibold" : "border-transparent"}`}
                        >
                            Contact Us
                        </li>
                    </ul>

                </ul>

                <div className="flex space-x-9 justify-center items-center cursor-pointer max-md:hidden max-lg:hidden">
                    <img src={assets.search_icon} alt="" />
                    <div>
                        <img src={assets.basket_icon} alt="" />
                        <div className="absolute flex w-[10px] h-[10px] bg-[tomato] rounded-full top-4 ml-[24px]"></div>
                    </div>
                    <button className="px-[25px] py-[7px] rounded-full text-[#49557e] border border-solid cursor-pointer transition duration-700 hover:bg-[#fff4f2]">Sign-In</button>

                </div>
                <div className="w-[50px] h-[50px] bg-amber-400 rounded-full max-2xl:hidden max-md:flex max-lg:flex"></div>
            </div>
        </header>
    )
}

export default Navbar