import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from '../components/Header'
import { Home } from '../pages/Home'
import { PostDetail } from '../pages/PostDetail'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/posts/:id" element={<PostDetail />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
