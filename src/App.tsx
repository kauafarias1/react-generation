import Home from "./pages/home/Home";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
				<Route path="/home" element={<Home />} />
				<Route path="/cadastro"	element={<Cadastro />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;