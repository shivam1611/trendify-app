import { BrowserRouter,Route, Routes} from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import ProductPage from "./pages/ProductPage/ProductPage"
import CartSection from './pages/CartSection/CartSection'
import WishList from './pages/WishList/WishList'
import UserProfile from './pages/UserProfile/UserProfile'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/productpage" element={<ProductPage/>}/>
        <Route path="/cartsection" element={<CartSection/>}/>
        <Route path="/wishlist" element={<WishList/>}/>
        <Route path="/user" element={<UserProfile/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App