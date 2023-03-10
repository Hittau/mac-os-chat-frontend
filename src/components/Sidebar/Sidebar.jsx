import React from 'react'
import SidebarHeading from './SidebarHeading'
import SidebarChannels from './SidebarChannels'
import SidebarFriends from './SidebarFriends'
import SidebarUserinfo from './SidebarUserinfo'
import SidebarSettingsButton from './SidebarSettingsButton'

const Sidebar = () => {
	return (
		<aside className='flex flex-col justify-between basis-1/6 bg-neutral-800 bg-opacity-70 px-6 pt-9'>
			<div className='flex flex-col overflow-hidden'>
				<div className='flex items-center justify-between'>
					<SidebarHeading />
					<SidebarSettingsButton />
				</div>
				<SidebarChannels />
				<SidebarFriends />
			</div>
			<SidebarUserinfo />
		</aside>
	)
}

export default Sidebar
