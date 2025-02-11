import { Route, Routes } from "react-router-dom"
import Footer from "./components/common/Footer"
import Navbar from "./components/common/Navbar"
import HomeScreen from "./pages/Homescreen"
import Cat from "./pages/Cart/Cat"
import PlaceOrder from "./pages/placeOrder/PlaceOrder"
// import HomeScreen from "./pages/HomeScreen"

const App = () => {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/cart" element={<Cat />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
      <Footer />

    </div>
  )
}

export default App