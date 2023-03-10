import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import Tooltip from '../Tooltip'

const SidebarSmallestPlusButton = () => {
	return (
		<Tooltip content='Add server' position='right'>
			<button className='flex justify-center items-center text-white text-2xl text-opacity-60 bg-[#1c1c1c] p-4 w-full h-full rounded-full hover:text-opacity-90 transition-colors duration-300'>
				<AiOutlinePlus />
			</button>
		</Tooltip>
	)
}

export default SidebarSmallestPlusButton
