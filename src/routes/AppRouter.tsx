import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About, Home } from '@features'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
