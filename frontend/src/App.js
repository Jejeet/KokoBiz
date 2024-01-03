
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import{BrowserRouter,Routes,Route} from "react-router-dom"
import LoginSignUp from './Pages/LoginSignUp';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
function App() {
  return (
    <div >
      <BrowserRouter>
      
      <Navbar/>
      <Routes>
        <Route path = '/' element = {<Shop/>} />
        <Route path = '/men' element={<ShopCategory category = "men" />} />
        <Route path = '/women/' element={<ShopCategory category = "women" />} />
        <Route path = '/kids'element ={ <ShopCategory category = "Kids" />} />
        <Route path = '/product' element={<Product/>}>
        <Route path = ':productId' element={<product/>} />
        </Route>
        <Route path = '/cart' element={<Cart/>} />
        <Route path = '/login' element={<LoginSignUp/>} />
      </Routes>
      </BrowserRouter>
      {/* link this route with our navbar */}
      
    </div>
  );
}

export default App;
