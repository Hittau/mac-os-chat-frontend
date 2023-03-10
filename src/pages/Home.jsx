import React from 'react'
import { Chat, Sidebar, SidebarSmallest, UserinfoSidebar } from '../components'

const Home = () => {
	return (
		<>
			<div className='flex h-screen'>
				<SidebarSmallest />
				<Sidebar />
				<Chat />
				<UserinfoSidebar />
			</div>
			<div className='absolute top-0 left-0 h-full w-full bg-mountains bg-cover bg-no-repeat bg-center blur-lg scale-105 -z-10'></div>
		</>
	)
}

export default Home
