import React from 'react'
import { IoMdNotificationsOutline } from 'react-icons/io'
import Tooltip from '../../Tooltip'

const ChatNotifications = () => {
	return (
		<Tooltip content='Notifications' position='bottom'>
			<IoMdNotificationsOutline className='cursor-pointer' size={22} />
		</Tooltip>
	)
}

export default ChatNotifications
