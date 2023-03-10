import React, { useState } from 'react'
import { BsPaperclip } from 'react-icons/bs'
import { BiMicrophone, BiSend } from 'react-icons/bi'

const ChatSendingForm = () => {
	const [message, setMessage] = useState('')

	const handleSendMessage = () => {
		console.log(message)
		setMessage('')
	}

	return (
		<div className='line-t'>
			<div className='px-6 py-4 text-zinc-400'>
				<div className='flex items-center border border-zinc-400 border-opacity-50 dark:border-zinc-700 rounded-md text-2xl'>
					<button className='px-2 hover:text-zinc-500 dark:hover:text-zinc-300 transition-colors duration-300'>
						<BsPaperclip />
					</button>
					<button className='px-2 hover:text-zinc-500 dark:hover:text-zinc-300 transition-colors duration-300'>
						<BiMicrophone />
					</button>
					<input
						type='text'
						className='flex-auto p-3 text-base bg-transparent outline-none'
						value={message}
						onChange={e => setMessage(e.target)}
						placeholder='Message in #general'
					/>
					<button
						onClick={handleSendMessage}
						className='px-2 hover:text-zinc-500 dark:hover:text-zinc-300 transition-colors duration-300'
					>
						<BiSend />
					</button>
				</div>
			</div>
		</div>
	)
}

export default ChatSendingForm
