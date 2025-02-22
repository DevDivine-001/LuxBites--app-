import { useContext, } from "react"
import { assets, } from "../assets/frontend_assets/assets"
import { StoreContext } from "../Store/StoreContext"

const FoodItems = ({ id, image, price, description, name }) => {
    // const [count, setCount] = useState(0)
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext)
    return (
        <>

            <div className="w-[267px] bg-[#fff] flex-col rounded-md flex cursor-pointer gap-1 max-md:w-full max-lg:w-full transition duration-300 shadow-lg" >
                <div className="w-full  object-cover flex justify-center items-center rounded-t-md relative">
                    <img src={image} alt="" className="object-cover rounded-t-md max-md:w-full                     " />
                    <div className="absolute flex text-[#000] right-1 bottom-2">
                        {!cartItems[id] ? <img onClick={() => addToCart(id)} src={assets.add_icon_white} /> : <div className="bg-white gap-2 flex items-center justify-center p-1 rounded-full">
                            <img src={assets.remove_icon_red} alt="" onClick={() => removeFromCart(id)} />
                            <p>{cartItems[id]}</p>
                            <img src={assets.add_icon_green} alt="" onClick={() => addToCart(id)} />
                        </div>
                        }
                    </div>
                </div>
                <div className="p-4 flex-col flex gap-2">
                    <div className="flex justify-between items-center">
                        <p className="font-medium text-md">{name}</p>

                        <div>
                            <img src={assets.rating_starts} alt="" />

                        </div>

                    </div>
                    <span className="text-[#676767] font-normal text-sm max-lg:text-[15px]">{description}</span>
                    <span className="text-[tomato] font-black">${price}</span>
                </div>


            </div>

        </>
    )
}

export default FoodItems