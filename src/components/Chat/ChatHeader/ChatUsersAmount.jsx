import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import Tooltip from '../../Tooltip'

const ChatUsersAmount = () => {
	return (
		<Tooltip content='Users amount' position='bottom'>
			<div className='flex items-center gap-1 select-none'>
				<AiOutlineUser />
				<span>1,093</span>
			</div>
		</Tooltip>
	)
}

export default ChatUsersAmount
