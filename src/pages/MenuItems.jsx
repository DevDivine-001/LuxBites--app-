import { menu_list } from "../assets/frontend_assets/assets"

const MenuItems = ({ category, setCategory }) => {
    return (
        <div className="w-full justify-center items-center  flex py-10">
            <div className="w-[88%] flex justify-between  flex-col gap-11 overflow-x-auto scrollbar-hide max-md:text-sm">
                <h1 className="flex items-center font-bold text-[35px] ">Explore our Menu</h1>
                <p className="font-semibold text-[15px] max-md:text-[15px] max-lg:text-[19px]"> Indulge in rich, gourmet flavors crafted for true food lovers. 🍔🍣 From sizzling delights to sweet treats,<br className="max-md:hidden max-lg:hidden " /> every bite is perfection. 🍕🥗<br className="max-md:hidden " /> Enjoy effortless ordering, fast delivery, and a five-star dining <br className="max-md:hidden max-lg:hidden  max-2xl:hidden " /> experience from the comfort of your home.</p>
                <div className="flex  gap-6 text-center  overflow-x-auto snap-x snap-mandatory max-md:text-sm cursor-pointer">
                    {menu_list?.map((item, index) => (
                        <div className="flex justify-center items-center flex-col gap-3 max-md:min-w-[80px]" key={index} onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}>
                            <img src={item.menu_image}
                                alt={item.menu_name}
                                className={` object-cover rounded-full transition-all duration-500 text-red-500  ${category === item.menu_name ? " border-red-500 border-2 p-1  text-red-500 transition-all duration-500" : ""
                                    }`}

                            />
                            <p>{item.menu_name}</p>
                        </div>

                    ))}
                </div>
                <hr className="text-gray-200  border-1" />
            </div>
        </div>
    )
}

export default MenuItems  