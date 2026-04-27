import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from '../components/Header'
import { Home } from '../pages/Home'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/post/:id" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
