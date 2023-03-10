import React from 'react'
import ChatHeader from './ChatHeader/ChatHeader'
import ChatMessages from './ChatMessages/ChatMessages'
import ChatSendingForm from './ChatSendingForm/ChatSendingForm'

const Chat = () => {
	return (
		<div className='flex flex-col basis-4/6 bg-white dark:bg-neutral-800'>
			<ChatHeader />
			<ChatMessages />
			<ChatSendingForm />
		</div>
	)
}

export default Chat
