import React from 'react'
import { FiSettings } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Tooltip from '../Tooltip'

const SidebarSettingsButton = () => {
	return (
		<Tooltip content='Server settings' position='left'>
			<Link
				to='/server-settings'
				className='inline-block text-white text-lg text-opacity-50 p-2 -m-2 hover:text-opacity-100 transition-colors duration-300'
			>
				<FiSettings />
			</Link>
		</Tooltip>
	)
}

export default SidebarSettingsButton
