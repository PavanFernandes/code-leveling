import { useState } from 'react'
import { Routes, Route, Link, } from "react-router-dom";


import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={
            <div className='text-center'>
              <br />
              <h1>begining of code leveling</h1>
            </div>
          }>
       </Route>

        </Route>
      </Routes>


    </>
  )
}

export default App
