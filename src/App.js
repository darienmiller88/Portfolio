import './App.css';
import Home from "./pages/Home/Home"
import CheckNav from './pages/CheckNav/CheckNav';
import NotFound from "./pages/NotFound/NotFound"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
    return (
      <BrowserRouter>
          <Routes>
            <Route exact path="/check" element={<CheckNav/>}/>
            <Route exact path="/" element={<Home/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
      </BrowserRouter>
    );
}

export default App;
