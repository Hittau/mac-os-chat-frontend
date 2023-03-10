import React from 'react'
import { useStateContext } from './contexts/ContextProvider'
import { Route, Routes } from 'react-router-dom'
import { Home, Settings } from './pages'

const App = () => {
	const { theme } = useStateContext()

	return (
		<div className={theme}>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/settings' element={<Settings />} />
			</Routes>
		</div>
	)
}

export default App
