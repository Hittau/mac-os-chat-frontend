import React from 'react'
import SidebarSmallestItems from './SidebarSmallestItems'
import SidebarSmallestPlusButton from './SidebarSmallestPlusButton'

const SidebarSmallest = () => {
	return (
		<aside className='flex flex-col justify-between items-center gap-4 bg-black pb-4 bg-opacity-70 overflow-visible'>
			<SidebarSmallestItems />
			<SidebarSmallestPlusButton />
		</aside>
	)
}

export default SidebarSmallest
