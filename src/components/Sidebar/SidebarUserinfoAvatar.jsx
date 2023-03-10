import React from 'react'
import { HiOutlinePhotograph } from 'react-icons/hi'
import Tooltip from '../Tooltip'
import AvatarImg from '../../assets/server.png'

const SidebarUserinfoAvatar = () => {
	return (
		<Tooltip content='Change image' position='top'>
			<div className='relative cursor-pointer select-none group'>
				<img src={AvatarImg} className='w-10 h-10 rounded-full' alt='avatar' />
				<div className='absolute top-0 left-0 flex justify-center items-center bg-black bg-opacity-50 w-full h-full rounded-2xl text-2xl invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300'>
					<HiOutlinePhotograph />
				</div>
			</div>
		</Tooltip>
	)
}

export default SidebarUserinfoAvatar
