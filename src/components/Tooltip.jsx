import React from 'react'

const Tooltip = ({ children, position, content }) => {
	const top =
		'bottom-[calc(100%_+_10px)] left-1/2 -translate-x-1/2 after:top-full after:left-1/2 after:-translate-x-1/2 after:border-b-0 after:border-t-slate-200 after:dark:border-t-neutral-700'
	const right =
		'left-[calc(100%_+_10px)] top-1/2 -translate-y-1/2 after:right-full after:top-1/2 after:-translate-y-1/2 after:border-l-0 after:border-r-slate-200 after:dark:border-r-neutral-700'
	const bottom =
		'top-[calc(100%_+_10px)] left-1/2 -translate-x-1/2 after:bottom-full after:left-1/2 after:-translate-x-1/2 after:border-t-0 after:border-b-slate-200 after:dark:border-b-neutral-700'
	const left =
		'right-[calc(100%_+_10px)] top-1/2 -translate-y-1/2 after:left-full after:top-1/2 after:-translate-y-1/2 after:border-r-0 after:border-l-slate-200 after:dark:border-l-neutral-700'

	const tooltipPosition = () => {
		if (position === 'top') return top
		if (position === 'right') return right
		if (position === 'bottom') return bottom
		if (position === 'left') return left
	}

	return (
		<div className='relative flex max-w-max group'>
			{children}
			<div
				role='tooltip'
				className={`absolute ${tooltipPosition()} px-2 py-1 text-gray-600 text-base font-normal dark:text-white bg-slate-200 dark:bg-neutral-700 rounded-md opacity-0 whitespace-nowrap invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 after:absolute after:border-8 after:border-transparent select-none z-50`}
			>
				{content}
			</div>
		</div>
	)
}

export default Tooltip
