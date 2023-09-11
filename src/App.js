import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Home from './pages/Home';
import Cart from './pages/Cart'
import ItemDescription from "./pages/ItemDescription"
import Profile from './pages/Profile'
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/sign-up"  element={<SignUp />} />
          <Route path="/sign-in"  element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/products/:id"  element={<ItemDescription />} />
          <Route path='*'  element={<NotFound />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
