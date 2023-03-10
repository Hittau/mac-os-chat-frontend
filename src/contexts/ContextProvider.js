import { createContext, useContext, useState } from 'react'

const StateContext = createContext()

const initialState = {}

const getTheme = () => {
	if (localStorage.getItem('theme')) return localStorage.getItem('theme')

	return window.matchMedia &&
		window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light'
}

export const ContextProvider = ({ children }) => {
	const [theme, setTheme] = useState(getTheme())

	return (
		<StateContext.Provider value={{ theme, setTheme }}>
			{children}
		</StateContext.Provider>
	)
}

export const useStateContext = () => useContext(StateContext)
