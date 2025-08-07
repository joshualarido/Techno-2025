// LIBRARIES
import { BrowserRouter, Routes, Route } from "react-router-dom"

// COMPONENTS
import Footer from "./components/Footer"

// PAGES
import Home from "./pages/Home"
import Events from "./pages/Events"

function App() {
  return (
    <>
      <BrowserRouter basename="/Techno-2025/">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/events" element={<Events/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  )
}

export default App
