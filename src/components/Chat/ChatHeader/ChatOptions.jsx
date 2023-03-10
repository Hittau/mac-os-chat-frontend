import React from 'react'
import { SlOptionsVertical } from 'react-icons/sl'
import Tooltip from '../../Tooltip'

const ChatOptions = () => {
	return (
		<Tooltip content='Options' position='bottom'>
			<SlOptionsVertical className='cursor-pointer' />
		</Tooltip>
	)
}

export default ChatOptions
