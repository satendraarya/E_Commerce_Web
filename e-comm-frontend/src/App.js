import React from 'react'
import {BrowserRouter as Router,Routes , Route} from 'react-router-dom'
import Register from './component/pages/Register'
import Login from './component/pages/Login'
function App() {
  return (
    <div>
    <Router>
    <Routes>
    <Route path='/' element={<Register></Register>}> </Route>
    <Route path='/login' element={<Login></Login>}></Route>
    </Routes>
    </Router>
   
    </div>
  )
}

export default App
