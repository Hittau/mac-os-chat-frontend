import React from 'react'
import { messages } from '../../../assets/dummy'
import ChatMessage from './ChatMessage'
import ChatNewDateDivider from './ChatNewDateDivider'

const ChatMessages = () => {
	return (
		<div className='flex flex-col gap-5 px-6 py-5 overflow-overlay apple-scrollbar'>
			{messages.map(({ senderName, avatar, content, timestamp }) => (
				<ChatMessage
					senderName={senderName}
					avatar={avatar}
					content={content}
					timestamp={timestamp}
				/>
			))}
			<ChatNewDateDivider />
			{messages.map(({ senderName, avatar, content, timestamp }) => (
				<ChatMessage
					senderName={senderName}
					avatar={avatar}
					content={content}
					timestamp={timestamp}
				/>
			))}
		</div>
	)
}

export default ChatMessages
