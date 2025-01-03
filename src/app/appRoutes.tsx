import { AboutPage } from '../pages/about'
import { HomePage } from '../pages/home'
import { BrowserRouter, Route, Routes } from 'react-router'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
}
