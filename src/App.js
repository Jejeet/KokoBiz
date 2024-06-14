
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import{BrowserRouter,Routes,Route} from "react-router-dom"
import LoginSignUp from './Pages/LoginSignUp';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import Footer from './Components/Footer/Footer';
import men_banner from "../src/Components/Assets 3/banner_mens.png"
import women_banner from "../src/Components/Assets 3/banner_women.png"
import kids_banner from "../src/Components/Assets 3/banner_kids.png"

//pass each banner through props to each of the category

function App() {
  return (
    <div>
      <BrowserRouter>
      
      <Navbar/>
      <Routes>
        <Route path = '/' element = {<Shop/>} />
        <Route path = '/men' element={<ShopCategory banner ={men_banner} category = "men" />} />
        <Route path = '/women/' element={<ShopCategory banner ={women_banner} category = "women" />} />
        <Route path = '/kids' element ={ <ShopCategory banner ={kids_banner} category = "kid" />} />
        <Route path = '/product' element={<Product/>}>
        <Route path = ':productId' element={<product/>} />
        </Route>
        <Route path = '/cart' element={<Cart/>} />
        <Route path = '/login' element={<LoginSignUp/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
      {/* link this route with our navbar */}
      
    </div>
  );
}

export default App;
