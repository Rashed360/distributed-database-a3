'use client'

import { useState, useEffect } from 'react'

const Preview = ({ locations, tables, fetchFromDatabase }) => {
	const [activeTable, setActiveTable] = useState(tables[0])
	const [currentLocation, setCurrentLocation] = useState(locations[0])
	const [data, setData] = useState(null)

	useEffect(() => {
		if (!data) {
			const fetched = async () => await fetchFromDatabase(currentLocation)
			console.log(fetched())
			setData(1)
		}
	}, [data])

	return (
		<div className='w-[800px] rounded-xl bg-white shadow-lg'>
			<header className='p-4 pb-2 flex justify-between items-center border-b'>
				<p className='text-xl font-bold'>Distributed Database System</p>
				<div className='flex items-center gap-2'>
					<label className='font-medium'>Current Location:</label>
					<select
						value={currentLocation}
						onChange={e => setCurrentLocation(e.target.value)}
						className='py-1 px-2 rounded border border-gray-200 outline-none bg-green-100'
					>
						{locations.map(location => (
							<option value={location} key={location}>
								{location}
							</option>
						))}
					</select>
				</div>
			</header>
			<main className='min-h-80'>
				<nav className='py-2 flex items-center bg-gray-100 border-b'>
					<p className='px-4 text-gray-400'>Tables:</p>
					<div className='pe-4 flex-1 flex justify-between items-center'>
						<div className='border border-x-2 border-gray-300 rounded-full overflow-hidden'>
							{tables.map(table => (
								<button
									className={
										activeTable.name === table.name
											? 'px-2 border border-gray-300 bg-green-200 font-medium'
											: 'px-2 border border-gray-300'
									}
									onClick={() => setActiveTable(table)}
									key={table.name}
								>
									{table.name}
								</button>
							))}
						</div>
						<div className='flex gap-2 text-xs'>
							<p>
								Fragmented:{' '}
								{activeTable.frag ? (
									<span className='font-medium text-green-600'>Yes</span>
								) : (
									<span className='font-medium text-red-600'>No</span>
								)}
							</p>
							<p>
								Replicated:{' '}
								{activeTable.repl ? (
									<span className='font-medium text-green-600'>Yes</span>
								) : (
									<span className='font-medium text-red-600'>No</span>
								)}
							</p>
						</div>
					</div>
				</nav>
				<div className='p-4'>hi</div>
			</main>
			<footer className='px-4 py-1 border-t flex justify-between'>
				<div className='flex items-center gap-1'>
					<span className='block w-3 h-3 bg-green-500 rounded-full' />
					<small>Database: {currentLocation}</small>
					<small className='text-gray-400'>(Loading)</small>
				</div>
				<button className='px-2 text-xs rounded-lg text-red-800 bg-red-100 hover:bg-red-200 transition'>
					Clear Cache
				</button>
			</footer>
		</div>
	)
}

export default Preview
