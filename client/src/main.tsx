import 'react-dom/client'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import {UserProvider } from './context/UserContext'
import App from './App'
import './index.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
		<UserProvider>
			<App/>
		</UserProvider>
  </StrictMode>
)