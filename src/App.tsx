import { useState, useEffect } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import CountryList from './components/CountryList'

// type array of objects
// type dataProps = {
// 	country: {
// 		coutryName: string
// 		capital: string
// 	}
// }[]

function App() {
	const [data, setData] = useState<any[]>([])

	useEffect(() => {
		const getData = async () => {
			const res = await fetch('https://restcountries.com/v3.1/all')
			const data = await res.json()
			console.log(data[0])
			console.log(data[0].cca3)
			setData(data)
		}
		getData()
	}, [])
	return (
		<main className='container mx-auto space-y-3 bg-slate-900 p-6 '>
			<SearchBar />
			<div className='flex items-center justify-center  '>
				<div className='grid gap-8 my-8 sm:grid-cols-3 lg:grid-cols-8 xl:grid-cols-10'>
					{data.map(country => (
						<CountryList url={country.flags.png} countryName={country.cca3} />
					))}
				</div>
			</div>
		</main>
	)
}

export default App
