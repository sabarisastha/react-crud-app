import {BrowserRouter,Routes,Route} from "react-router"
import Create from "./Pages/Create"
import Read from "./Pages/Read";
import Update from "./Pages/Update";

function App() {
  

  return (
    <>
      

      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/read" element={<Read/>} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </>
  );
}

export default App
