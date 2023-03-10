import React from 'react'
import { FiEdit3 } from 'react-icons/fi'

const SidebarHeadingDropdown = ({ dropdown }) => {
	const dropdownItemClassName =
		'flex justify-between items-center px-4 py-2 capitalize cursor-pointer first:rounded-t-lg last:rounded-b-lg hover:bg-neutral-400 dark:hover:bg-neutral-700 transition-all duration-100'

	return (
		<ul
			className={`${
				dropdown ? 'visible opacity-100' : 'invisible opacity-0'
			} absolute top-full mt-1 w-full max-h-40 text-black dark:text-white bg-neutral-200 dark:bg-neutral-800 rounded-lg divide-y divide-zinc-500 overflow-overlay apple-scrollbar transition-all duration-200`}
		>
			<li className={dropdownItemClassName}>
				<span>rename</span>
				<FiEdit3 />
			</li>
			<li className={`${dropdownItemClassName} text-rose-600 font-bold`}>
				<span>delete</span>
			</li>
		</ul>
	)
}

export default SidebarHeadingDropdown
