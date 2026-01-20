import Home from "./pages/home/Home";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";
import { AuthProvider } from "./contexts/AuthContext";
import ListaTemas from "./components/tema/listatemas/listaTema";
import FormTema from "./components/tema/formtema/formTema";
import DeletarTema from "./components/tema/deletartema/deletarTema";

function App() {
  return (
    <>
    <AuthProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
				<Route path="/home" element={<Home />} />
				<Route path="/cadastro"	element={<Cadastro />}/>
        <Route path="/temas"	element={<ListaTemas />}/>
        <Route path="/cadastrartema" element={<FormTema />} />
        <Route path="/editartema/:id" element={<FormTema />} />
        <Route path="/deletartema/:id" element={<DeletarTema />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </AuthProvider>
    </>
  );
}

export default App;