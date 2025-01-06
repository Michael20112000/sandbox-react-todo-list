import { BrowserRouter, Route, Routes } from 'react-router'

import { AboutPage } from '@pages/about'
import { HomePage } from '@pages/home'

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
