import { menu_list } from "../assets/frontend_assets/assets"

const MenuItems = () => {
    return (
        <div className="w-full justify-center items-center  flex py-10">
            <div className="w-[88%] flex justify-between  flex-col gap-11 overflow-x-hidden max-md:text-sm">
                <h1 className="flex items-center font-bold text-[35px] ">Explore our Menu</h1>
                <p className="font-semibold text-[15px] max-md:text-[15px] max-lg:text-[19px]"> Indulge in rich, gourmet flavors crafted for true food lovers. 🍔🍣 From sizzling delights to sweet treats,<br className="max-md:hidden max-lg:hidden " /> every bite is perfection. 🍕🥗<br className="max-md:hidden " /> Enjoy effortless ordering, fast delivery, and a five-star dining <br className="max-md:hidden max-lg:hidden  max-2xl:hidden" /> experience from the comfort of your home.</p>
                <div className="flex  gap-6 text-center   overflow-x-auto span-x snap-mandatory scrollbar-hide whitespace-nowrap cursor-pointer">
                    {menu_list.map((item, index) => (
                        <div className="flex flex-col items-center gap-3 min-w-[150px] md:min-w-[200px] snap-start" key={index}>
                            <img src={item.menu_image} alt="image" className="object-cover w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-lg" />
                            <p>{item.menu_name}</p>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default MenuItems