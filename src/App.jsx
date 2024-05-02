import { Routes, Route, Link, } from "react-router-dom";


import Navbar from './components/Navbar';
import Projects from './components/Projects/Projects';
import Learn from "./components/Learn/Learn";

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={
            <div className='items-center'>
              {/* <h1 className='items-center text-center'>begining of code leveling</h1>
              <br/> */}
              <Projects/>
            </div>
          }>
       </Route>
       <Route path="projects" element={<Projects/>}>
       </Route>
       <Route path="learn" element={
        <Learn/>
       }>
       </Route>
        </Route>
      </Routes>


    </>
  )
}

export default App
