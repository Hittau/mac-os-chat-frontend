import React from 'react'
import ChatHeading from './ChatHeading'
import ChatNotifications from './ChatNotifications'
import ChatOptions from './ChatOptions'
import ChatSearch from './ChatSearch'
import ChatUsersAmount from './ChatUsersAmount'

const ChatHeader = () => {
	return (
		<div className='flex justify-between px-6 py-9 text-zinc-400 line-b'>
			<ChatHeading />
			<div className='flex items-center gap-6'>
				<ChatUsersAmount />
				<ChatSearch />
				<ChatNotifications />
				<ChatOptions />
			</div>
		</div>
	)
}

export default ChatHeader
