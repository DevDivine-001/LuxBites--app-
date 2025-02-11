import headerImg from "../assets/frontend_assets/header_img.png"
const Hero = () => {
    return (
        <div className="flex justify-center items-center w-full h-[91vh]">
            <div className="w-[88%]  items-center flex h-[81vh]  border-solid rounded-t-2xl  p-20 max-md:p-5 max-lg:p-14" style={{ backgroundImage: `url(${headerImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
                <div className="justify-between flex flex-col  gap-8 max-lg:gap-11 max-md:gap-8">
                    <h1 className="text-[#fff] text-[35px] font-bold max-md:text-[29px] max-lg:text-[43px]">LuxBites – Savor delicious meals, fast delivery, <br className="max-md:hidden max-lg:hidden" /> and pure flavor in every bite! 🍝🍔🥗🍲🔥</h1>
                    <span className="text-[#fff] text-[23px] max-md:text-[18px] max-lg:text-[26px]">Craving something delicious? <br />  Order effortlessly with LuxBites – pure bite is a taste of perfection!, flavor in every bite.! 🚀🔥 </span>
                    <div>
                        <button className="bg-[#fff] text-[#000] text-lg sm:text-sm font-medium px-10 py-3 rounded-full hover:bg-[#e64a2e] transition duration-1000  hover:text-[#fff] cursor-pointer">
                            View Menu
                        </button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Hero