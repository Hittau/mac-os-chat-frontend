import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const ChatSearch = () => {
	return (
		<div className='flex items-center border border-zinc-400 border-opacity-50 rounded-md'>
			<input
				type='text'
				className='bg-transparent outline-none pl-4 py-[6px]'
				placeholder='Search...'
			/>
			<button className='px-4'>
				<AiOutlineSearch size={22} />
			</button>
		</div>
	)
}

export default ChatSearch
