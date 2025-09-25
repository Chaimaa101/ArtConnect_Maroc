import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Pages/Layout"
import Home from "./Pages/Home"
import Admin from "./Pages/Admin"
import Details from "./Pages/Details"
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Layout />}>
          <Route index element={<Home/>}/>
          <Route path="/admin" element={<Admin />}/>
          <Route path="/about" element={<Admin />}/>
          <Route path="/details/:id" element={<Details />}/>
        </Route>
      </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
