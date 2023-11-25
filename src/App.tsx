import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUpPage from './pages/signup'
import { Navbar } from './components/navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
