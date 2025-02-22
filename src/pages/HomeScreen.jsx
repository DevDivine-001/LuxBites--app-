import { useState } from "react"
import Hero from "./Hero"
import MenuItems from "./MenuItems"
import TopDishes from "./TopDishes"
import FoodApp from "./FoodApp"

const HomeScreen = () => {
    const [category, setCategory] = useState("All")
    return (
        <div>
            <Hero />
            <MenuItems category={category} setCategory={setCategory} />
            <TopDishes category={category} setCategory={setCategory} />
            <FoodApp />
        </div>
    )
}

export default HomeScreen