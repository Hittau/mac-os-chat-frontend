import React from 'react'
import { userinfo } from '../../assets/dummy'
import AvatarImg from '../../assets/server.png'

const UserinfoSidebar = () => {
	return (
		<aside className='flex flex-col basis-1/6'>
			<img src={AvatarImg} className='max-w-full max-h-full' alt='avatar' />
			<div className='flex-auto px-5 py-4 bg-white bg-opacity-50 dark:bg-neutral-800 dark:bg-opacity-70 dark:text-white'>
				<h3 className='text-xl font-bold capitalize'>amilia luna</h3>
				<p className='text-zinc-600 text-opacity-80 dark:text-zinc-400 pb-6'>
					UI Designer
				</p>
				<button className='text-white bg-blue-500 rounded-md w-full py-1'>
					Message
				</button>
				<ul className='flex flex-col gap-3 pt-6'>
					{userinfo.map(({ title, content }) => (
						<li key={title}>
							<h6 className='text-zinc-600 text-opacity-80 dark:text-zinc-400 capitalize'>
								{title}
							</h6>
							<p>{content}</p>
						</li>
					))}
				</ul>
			</div>
		</aside>
	)
}

export default UserinfoSidebar
