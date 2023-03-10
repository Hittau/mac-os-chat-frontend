import React, { useState } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import Tooltip from '../../Tooltip'

const ChatFavoritesButton = () => {
	const [favorite, setFavorite] = useState(false)

	return (
		<Tooltip
			content={favorite ? 'Remove from favorites' : 'Add to favorites'}
			position='bottom'
		>
			<button onClick={() => setFavorite(!favorite)}>
				{favorite ? (
					<AiFillStar className='text-yellow-500' />
				) : (
					<AiOutlineStar />
				)}
			</button>
		</Tooltip>
	)
}

export default ChatFavoritesButton
