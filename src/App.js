import './App.css';
import Home from "./pages/Home/Home"
import NotFound from "./pages/NotFound/NotFound"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
    return (
      <BrowserRouter>
          <Routes>
             <Route exact path="/" element={<Home/>}/>
              <Route path="*" element={<NotFound/>}/>
          </Routes>
      </BrowserRouter>
    );
}

export default App;
