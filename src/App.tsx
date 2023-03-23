import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./shared/components/navbar"
import { Router } from "./routes";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Router/>
    </BrowserRouter>
  )
}

export default App
