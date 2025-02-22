import { assets } from "../../assets/frontend_assets/assets"

const Footer = () => {
    return (
        <div className="flex justify-center items-center w-full flex-col bg-[#000] ">
            <div className="w-[88%] flex justify-between items-center py-10 gap-8 flex-col">
                <div className="w-full justify-between  flex flex-wrap max-md:gap-5">
                    <div className="flex-col flex gap-3 text-[#d9d9d9]">
                        <div>
                            <img src={assets.logo} alt="" />

                        </div>
                        <p>Top Food offer</p>
                        <div>
                            <img src={assets.linkedin_icon} alt="" className=" w-[20%]" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 text-[#fff] justify-center">
                        <h2 className="md:text-sm font-bold lg:text-xl">Company</h2>
                        <ul className="flex flex-col gap-2 text-[#d9d9d9]">
                            <li className="">Home</li>
                            <li>About Us</li>
                            <li>Delivery</li>
                            <li>Privacy policy</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-3 text-[#fff]">

                        <h2 className="md:text-sm font-bold lg:text-xl">GET IN TOUCH</h2>

                        <p className="text-[#d9d9d9]">LuxBites </p>
                        <p className="text-[#d9d9d9]">devcodes4dev@gmail.com</p>


                    </div>
                </div>
                <div className="flex flex-col justify-center items-center w-full gap-2">
                    <hr className="text-gray-200  border-1 w-full" />

                    <p className="text-[#d9d9d9] text-center">LuxBites Copyright 2025 ©️ Tomato.com - All Right Reserved </p>
                </div>
            </div>

        </div>
    )
}

export default Footer