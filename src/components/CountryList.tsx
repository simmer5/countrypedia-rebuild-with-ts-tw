type ListProps = {
	url: string
	countryName: string
}

const CountryList = ({ url, countryName }: ListProps) => {
	return (
		<div className='bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full min-w-xs text-center'>
			<div className='object-cover object-center w-full mx-auto'>
				<div className='py-4 px-4'>
					<img
						className='w-24 h-24 mb-1 rounded-full shadow-lg'
						src={url}
						alt={countryName}
					/>

					<h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>
						{countryName}
					</h5>
				</div>
			</div>
		</div>
	)
}

export default CountryList
