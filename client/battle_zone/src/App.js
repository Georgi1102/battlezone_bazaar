import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import Forum from "./pages/Forum.jsx"
import ProductDetails from "./pages/ProductDetails.jsx";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"

library.add(fab, fas, far)

function App() {
  return (
    <div className="App" style={{ maxWidth: "100vw", maxHeight: "100vh" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/products" element={<ProductDetails />} />
        <Route path="/forum" element={<Forum />} />
      </Routes>
    </div>
  );
}

export default App;