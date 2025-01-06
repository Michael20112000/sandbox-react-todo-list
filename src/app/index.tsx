import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { AppProviders } from './appProviders'
import { AppRoutes } from './appRoutes'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProviders>
      <AppRoutes />
    </AppProviders>
  </StrictMode>,
)
