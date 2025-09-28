import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Pages/Layout"
import Home from "./Pages/Home"
import Admin from "./Pages/Admin"
import Publier from "./Pages/Publier"
import Apropos from "./Pages/Apropos"
import Favoris from "./Pages/Favoris"
import Details from "./Pages/Details"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Layout />}>
          <Route index element={<Home/>}/>
          <Route path="/admin" element={<Admin />}/>
          <Route path="/publier" element={<Publier />}/>
          <Route path="/admin" element={<Admin />}/>
          <Route path="/about" element={<Apropos/>}/>
          <Route path="/details/:type/:id" element={<Details/>}/>
           <Route path="/favoris" element={<Favoris/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
   
    </>
  )
}


export default App