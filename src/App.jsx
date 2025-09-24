import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Pages/Layout"
import Home from "./Pages/Home"
import Admin from "./Pages/Admin"
import Publier from "./Pages/Publier"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Layout />}>
          <Route index element={<Home/>}/>
          <Route path="/admin" element={<Admin />}/>
          <Route path="/publier" element={<Publier />}/>
          <Route path="/about" element={<Admin />}/>
        </Route>
      </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
