import { BrowserRouter,Route, Routes} from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import ProductPage from "./pages/ProductPage/ProductPage"
import CartSection from './pages/CartSection/CartSection'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/productpage" element={<ProductPage/>}/>
        <Route path="/cartsection" element={<CartSection/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App