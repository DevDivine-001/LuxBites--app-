import { assets } from "../../assets/frontend_assets/assets"

const Navbar = () => {
    return (
        <header className="flex justify-center items-center w-full h-[12vh]  top-0 z-20">
            <div className="flex justify-between items-center w-[88%]">
                <img src={assets.logo} alt="" />
                <ul className="flex space-x-8 justify-center items-center text-[#49557e] text-[17px]">
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Mobile app</li>
                    <li>Contact Us</li>
                </ul>

                <div className="flex space-x-9 justify-center items-center">
                    <img src={assets.search_icon} alt="" />
                    <div>
                        <img src={assets.basket_icon} alt="" />
                        <div></div>
                    </div>
                    <button className="px-[25px] py-[7px] rounded-full text-[#49557e] border border-solid cursor-pointer transition duration-300 hover:bg-[#fff4f2]">Sign-In</button>

                </div>
            </div>
        </header>
    )
}

export default Navbar