import React from 'react'

const SearchBar = () => {
	return (
		<div className='max-w-3xl relative text-lg bg-transparent text-gray-400'>
			<div className='flex items-center border-2 border-teal-500 py-2'>
				<input
					className='bg-transparent border-none mr-3 px-2 leading-tight focus:outline-none'
					type='text'
					placeholder='Search'
				/>
			</div>
		</div>
	)
}

export default SearchBar
