import { useState } from "react"
import Hero from "./Hero"
import MenuItems from "./MenuItems"
import TopDishes from "./TopDishes"

const HomeScreen = () => {
    const [category, setCategory] = useState("All")
    return (
        <div>
            <Hero />
            <MenuItems category={category} setCategory={setCategory} />
            <TopDishes />
        </div>
    )
}

export default HomeScreen