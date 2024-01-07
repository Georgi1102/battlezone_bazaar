import { Route, Routes } from "react-router-dom";
import Home from  "./pages/Home.jsx"
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import Forum from "./pages/Forum.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";

function App() {
  return (
    <div className="App" style={{maxWidth: "100vw", maxHeight: "100vh"}}>
      <Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signUp" element={<SignUp />} />
        <Route path="/productDetails" element={<ProductDetails />} />
        <Route path="/forum" element={<Forum />} />
			</Routes>
    </div>
  );
}

export default App;