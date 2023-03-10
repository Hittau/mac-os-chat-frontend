import React from 'react'
import ChatFavoritesButton from './ChatFavoritesButton'

const ChatHeading = () => {
	return (
		<h2 className='flex items-center gap-2 text-xl font-bold'>
			<span className='text-black dark:text-white'>#general</span>
			<ChatFavoritesButton />
		</h2>
	)
}

export default ChatHeading
