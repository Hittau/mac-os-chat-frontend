import React, { useEffect } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'

const Settings = () => {
	const navigate = useNavigate()
	const { theme, setTheme } = useStateContext()

	const handleClose = () => {
		navigate(-1)
	}

	useEffect(() => {
		const handleCloseOnKeyDown = e => {
			if (e.key === 'Escape') {
				handleClose()
			}
		}

		document.addEventListener('keydown', handleCloseOnKeyDown)

		return () => {
			document.removeEventListener('keydown', handleCloseOnKeyDown)
		}
	}, [])

	const setLightTheme = () => {
		setTheme('light')
		localStorage.setItem('theme', 'light')
	}
	const setDarkTheme = () => {
		setTheme('dark')
		localStorage.setItem('theme', 'dark')
	}

	return (
		<div className='h-screen dark:bg-neutral-800 dark:text-white'>
			<div className='max-w-5xl mx-auto'>
				<div className='flex justify-between items-center py-10 text-3xl'>
					<h1 className='font-bold capitalize'>settings</h1>
					<button
						onClick={handleClose}
						className='flex flex-col items-center uppercase opacity-80 hover:opacity-100 transition-opacity duration-300'
					>
						<AiOutlineCloseCircle />
						<span className='text-lg'>esc</span>
					</button>
				</div>
				<div>
					<h2 className='text-xl pb-6'>Appearance</h2>
					<form className='flex flex-col gap-2'>
						<h3>Theme</h3>
						<div className='flex bg-neutral-300 dark:bg-neutral-700 px-3 py-2 rounded-md'>
							<input
								type='radio'
								id='dark'
								name='theme'
								value='dark'
								checked={theme === 'dark' ? true : false}
								onChange={setDarkTheme}
							/>
							<label htmlFor='dark' className='inline-block w-full pl-2'>
								Dark
							</label>
						</div>
						<div className='flex bg-neutral-300 dark:bg-neutral-700 px-3 py-2 rounded-md'>
							<input
								type='radio'
								id='light'
								name='theme'
								value='light'
								checked={theme === 'light' ? true : false}
								onChange={setLightTheme}
							/>
							<label htmlFor='light' className='inline-block w-full pl-2'>
								Light
							</label>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Settings
