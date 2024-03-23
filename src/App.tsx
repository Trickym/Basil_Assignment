import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Home from './Home'
import MainLayout from './Layout'
import Orders from './Orders'

function App() {

  return (
    <>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </MainLayout>
      </Router>
    </>
  )
}

export default App
