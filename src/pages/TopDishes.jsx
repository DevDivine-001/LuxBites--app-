import { food_list } from "../assets/frontend_assets/assets"
import FoodItems from "./Fooditems"


const TopDishes = ({ category }) => {

    return (
        <div className="flex justify-center items-center w-full py-10">
            <div className="flex flex-col justify-between  w-[88%] gap-11">
                <h1 className="flex items-center font-bold text-[35px] ">Top dishes near you</h1>
                {/* <p className="font-semibold text-[15px] max-md:text-[15px] max-lg:text-[19px] flex justify-center"> Indulge in rich, gourmet flavors crafted for true food lovers. 🍔🍣 From sizzling delights to sweet treats,<br className="max-md:hidden max-lg:hidden " /> every bite is perfection. 🍕🥗<br className="max-md:hidden " /> Enjoy effortless ordering, fast delivery, and a five-star dining <br className="max-md:hidden max-lg:hidden  max-2xl:hidden " /> experience from the comfort of your home.</p> */}


                <div className=" justify-center   flex-wrap  items-center gap-9 grid grid-cols-4 max-md:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 max-xl:gap-12  max-md:gap-6 py-4">

                    {food_list.map((item, index) => {
                        { console.log(category, item.category) }
                        if (category === "All" || category === item.category) {
                            return <FoodItems
                                key={index}
                                id={item._id}
                                name={item.name}
                                description={item.description}
                                price={item.price}
                                image={item.image}
                            />
                        }

                    }
                    )}

                </div>
            </div>
        </div>
    )
}

export default TopDishes