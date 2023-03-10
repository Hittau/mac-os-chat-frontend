import React from 'react'
import SidebarUserinfoSettingsButton from './SidebarUserinfoSettingsButton'
import SidebarUserinfoAvatar from './SidebarUserinfoAvatar'
import SidebarUserinfoCredentials from './SidebarUserinfoCredentials'

const SidebarUserinfo = () => {
	return (
		<div className='flex justify-between items-center min-w-full bg-neutral-200 dark:bg-neutral-900 -mx-6 px-3 py-1 dark:text-white'>
			<div className='flex items-center gap-3'>
				<SidebarUserinfoAvatar />
				<SidebarUserinfoCredentials />
			</div>
			<SidebarUserinfoSettingsButton />
		</div>
	)
}

export default SidebarUserinfo
