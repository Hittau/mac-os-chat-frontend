import React from 'react'
import { channels } from '../../assets/dummy'
import SidebarList from './SidebarList'

const SidebarChannels = () => {
	return (
		<SidebarList header='channels'>
			<ul className='flex flex-col gap-3 text-white list-hash pl-5 overflow-auto apple-scrollbar'>
				{channels.map(({ name, path }) => (
					<li key={path}>
						<a href={path} className='inline-block w-full pl-1'>
							{name}
						</a>
					</li>
				))}
			</ul>
		</SidebarList>
	)
}

export default SidebarChannels
