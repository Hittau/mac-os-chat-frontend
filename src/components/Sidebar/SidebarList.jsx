import React from 'react'

const SidebarList = ({ header, children }) => {
	return (
		<div className='flex flex-col py-4 overflow-auto'>
			<h3 className='flex justify-between items-center text-white text-opacity-40 text-sm font-bold uppercase py-2'>
				<p>{header}</p>
				<span>11</span>
			</h3>
			{children}
		</div>
	)
}

export default SidebarList
