import React from 'react'

const ChatMessage = ({ senderName, avatar, content, timestamp }) => {
	return (
		<div className='flex gap-3 dark:text-white'>
			<img
				src={avatar}
				className='w-10 h-10 rounded-md select-none'
				draggable={false}
				alt='avatar'
			/>
			<div>
				<div className='flex gap-2 pb-1 leading-none'>
					<p className='font-bold capitalize'>{senderName}</p>
					<span className='text-neutral-400'>{timestamp}</span>
				</div>
				<p className='dark:text-neutral-200'>{content}</p>
			</div>
		</div>
	)
}

export default ChatMessage
