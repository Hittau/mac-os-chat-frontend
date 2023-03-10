import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import SidebarHeadingDropdown from './SidebarHeadingDropdown'

const SidebarHeading = () => {
	const [dropdown, setDropdown] = useState(false)
	const dropdownRef = useRef(null)

	useEffect(() => {
		const handleClickAway = e => {
			if (!dropdown) return

			if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
				setDropdown(false)
			}
		}

		document.addEventListener('mousedown', handleClickAway)

		return () => {
			document.removeEventListener('mousedown', handleClickAway)
		}
	}, [dropdown])

	return (
		<div ref={dropdownRef} className='relative select-none'>
			<h1
				onClick={() => setDropdown(!dropdown)}
				className='flex items-center gap-1 text-white text-xl font-bold cursor-pointer group'
			>
				<span>Nomad List</span>
				{dropdown ? <IoIosArrowUp /> : <IoIosArrowDown />}
			</h1>
			<SidebarHeadingDropdown dropdown={dropdown} />
		</div>
	)
}

export default SidebarHeading
