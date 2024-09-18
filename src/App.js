import HomePage from "./Page/Home/HomePage";
import Footer from "./Components/Utility/Footer";
import NavBarLogin from "./Components/Utility/NavBarLogin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Page/Auth/LoginPage";


function App() {
  return (
    <div className="font">
    <NavBarLogin />
    <BrowserRouter>
    <Routes>
<Route index element={<HomePage />} />
<Route path="/login" element={<LoginPage />
} />
      </Routes>
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;
