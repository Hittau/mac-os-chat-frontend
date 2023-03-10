import React from 'react'

const SidebarFriend = ({ avatar, name }) => {
	return (
		<li className='flex items-center gap-2 cursor-pointer'>
			<div className='w-2 h-2 bg-green-500 rounded-full'></div>
			<img src={avatar} className='w-10 h-10 rounded-md' alt='avatar' />
			<p className='capitalize'>{name}</p>
		</li>
	)
}

export default SidebarFriend
