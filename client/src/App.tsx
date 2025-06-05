import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthorizationPage from './pages/AuthorizationPage/AuthorizationPage.tsx'
import HomePage from './pages/HomePage/HomePage.tsx'
import UserProfilePage from './pages/UserProfilePage/UserProfilePage.tsx'

function App() {

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

  return (
	<BrowserRouter basename='/MediaUniverse/'>
		<Routes>
			<Route path='/' element={<AuthorizationPage/>} />
			<Route path='/HomePage' element={<HomePage/>} />
			<Route path='/UserProfilePage' element={<UserProfilePage/>} />
		</Routes>
		</BrowserRouter>
  )
}

export default App
