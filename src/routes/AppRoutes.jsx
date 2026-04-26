import { BrowserRouter, Routes, Route } from 'react-router-dom'

function ComingSoon() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>PostsApp</h1>
      
    </div>
  )
}

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<ComingSoon />} />
      </Routes>
    </BrowserRouter>
  )
}
