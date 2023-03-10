import React from 'react'
import { Link } from 'react-router-dom'

const SidebarSmallestItem = ({ img, path }) => {
	return (
		<li key={path}>
			<Link to={path}>
				<img src={img} className='w-14 h-14 rounded-full' alt='server' />
			</Link>
		</li>
	)
}

export default SidebarSmallestItem
