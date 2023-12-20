import { Route, Routes } from "react-router-dom";
import Home from  "./pages/Home.jsx"
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";

function App() {
  return (
    <div className="App" style={{width: "100vw", height: "100vh"}}>
      <Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signUp" element={<SignUp />} />
			</Routes>
    </div>
  );
}

export default App;