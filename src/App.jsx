import { Routes, Route, Link, } from "react-router-dom";


import Navbar from './components/Navbar';
import Projects from './components/Projects/Projects';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={
            <div className='items-center'>
              <br />
              {/* <h1 className='items-center text-center'>begining of code leveling</h1>
              <br/> */}
              <Projects/>
            </div>
          }>
       </Route>
        </Route>
      </Routes>


    </>
  )
}

export default App
