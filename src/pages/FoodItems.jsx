import { assets, food_list } from "../assets/frontend_assets/assets"

const FoodItems = () => {
    return (
        <>
            {
                food_list?.map((item, index) => (
                    <div className="w-[267px] bg-[#fff] flex-col rounded-md flex cursor-pointer gap-1 max-md:w-full max-lg:w-full transition duration-300 shadow-lg" key={index.id}>
                        <div className="w-full  object-cover flex justify-center items-center rounded-t-md ">
                            <img src={item.image} alt="" className="object-cover rounded-t-md max-md:w-full                     " />
                        </div>
                        <div className="p-4 flex-col flex gap-2">
                            <div className="flex justify-between items-center">
                                <p className="font-medium text-md">{item.name}</p>

                                <div>
                                    <img src={assets.rating_starts} alt="" />

                                </div>

                            </div>
                            <span className="text-[#676767] font-normal text-sm max-lg:text-[15px]">{item.description}</span>
                            <span className="text-[tomato] font-black">${item.price}</span>
                        </div>


                    </div>
                ))
            }
        </>
    )
}

export default FoodItems