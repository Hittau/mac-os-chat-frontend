import React from 'react'
import { serversList } from '../../assets/dummy'
import SidebarSmallestItem from './SidebarSmallestItem'

const SidebarSmallestItems = () => {
	return (
		<ul className='flex flex-col gap-5 apple-scrollbar py-2 px-3 overflow-auto'>
			{serversList.map(({ img, path }) => (
				<SidebarSmallestItem key={path} img={img} path={path} />
			))}
		</ul>
	)
}

export default SidebarSmallestItems
