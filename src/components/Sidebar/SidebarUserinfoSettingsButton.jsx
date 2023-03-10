import React from 'react'
import { FiSettings } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Tooltip from '../Tooltip'

const SidebarUserinfoSettingsButton = () => {
	return (
		<Tooltip content='Settings' position='top'>
			<Link to='/settings' className='text-lg'>
				<FiSettings />
			</Link>
		</Tooltip>
	)
}

export default SidebarUserinfoSettingsButton
