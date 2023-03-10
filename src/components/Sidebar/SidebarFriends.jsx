import React from 'react'
import { friends } from '../../assets/dummy'
import SidebarFriend from './SidebarFriend'
import SidebarList from './SidebarList'

const SidebarFriends = () => {
	return (
		<SidebarList header='friends'>
			<ul className='flex flex-col gap-3 text-white overflow-auto apple-scrollbar'>
				{friends.map(({ name, avatar }) => (
					<SidebarFriend key={name} avatar={avatar} name={name} />
				))}
			</ul>
		</SidebarList>
	)
}

export default SidebarFriends
