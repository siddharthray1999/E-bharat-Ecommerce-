import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Order from "./Pages/Order/Order";
import Cart from "./Pages/Cart/Cart";
import Nopage from "./Pages/Nopage/Nopage";
import Dashboard from "./Pages/Admin/Dashboard/Dashboard";
import MyState from "./Context/Data/myState";
import Login from "./Pages/Registration/Login";
import Signup from "./pages/Registration/Signup";
import ProductInfo from "./Pages/productInfo/ProductInfo";
import AddProduct from "./pages/Admin/Pages/AddProduct";
import UpdateProduct from "./Pages/Admin/Pages/UpdateProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Order"
            element={
              <ProtectedRoute>
                <Order />
              </ProtectedRoute>
            }
          />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route
            path="/Dashboard"
            element={
              <ProtectedRoutesForAdmin>
                <Dashboard />
              </ProtectedRoutesForAdmin>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route
            path="/addproduct"
            element={
              <ProtectedRoutesForAdmin>
                <AddProduct />
              </ProtectedRoutesForAdmin>
            }
          />
          <Route
            path="/updateProduct"
            element={
              <ProtectedRoutesForAdmin>
                <UpdateProduct />
              </ProtectedRoutesForAdmin>
            }
          />
          <Route path="/*" element={<Nopage />} />
        </Routes>
        <ToastContainer />
      </Router>
    </MyState>
  );
}

export default App;
//protected route for user
export const ProtectedRoute = (children) => {
  const user = localStorage.getItem("user");
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};
//protected route for admin
export const ProtectedRoutesForAdmin = (children) => {
  const admin = JSON.parse(localStorage.getItem("user"));
  console.log(admin.user.email);
  if (admin.user.email === "test1@gmail.com") {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};
