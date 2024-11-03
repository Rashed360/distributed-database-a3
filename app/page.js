'use client'

import { useState, useTransition, useEffect } from 'react'
import { fetchDataFromPostgres } from './actions'

export const locations = ['Helsinki', 'Stockholm', 'Copenhagen']
export const tables = [
	{ name: 'Workers', frag: false, repl: true },
	{ name: 'WorkerData', frag: true, repl: false },
	{ name: 'Projects', frag: false, repl: true },
	{ name: 'ProjectWorker', frag: true, repl: true },
]

export default function App() {
	const [activeTable, setActiveTable] = useState(tables[0])
	const [currentLocation, setCurrentLocation] = useState(locations[0])
	const [data, setData] = useState(null)
	const [isPending, startTransition] = useTransition()

	const handleFetchData = () => {
		if (data && data[currentLocation] && data[currentLocation][activeTable.name]) return
		startTransition(async () => {
			const result = await fetchDataFromPostgres(currentLocation, activeTable.name)
			const newData = { ...data }
			newData[currentLocation] = { ...newData[currentLocation], [activeTable.name]: result }
			setData(newData)
		})
	}

	useEffect(() => {
		handleFetchData()
	}, [data, activeTable, currentLocation])

	return (
		<div className='p-2 flex justify-center'>
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
				<main className='min-h-[600px]'>
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
										onClick={() => {
											setActiveTable(table)
											handleFetchData()
										}}
										disabled={isPending}
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
					<div className='p-4'>
						{data && data[currentLocation] && data[currentLocation][activeTable.name] ? (
							data[currentLocation][activeTable.name].length === 0 ? (
								<p>No Entries</p>
							) : (
								<table className='w-full table-auto border-collapse border border-gray-300'>
									<thead>
										<tr>
											{Object.keys(data[currentLocation][activeTable.name][0]).map(column => (
												<th className='uppercase border border-gray-300 bg-gray-50' key={column}>
													{column}
												</th>
											))}
										</tr>
									</thead>
									<tbody>
										{data[currentLocation][activeTable.name].map((row, idx) => (
											<tr key={idx}>
												{Object.keys(data[currentLocation][activeTable.name][0]).map(column => (
													<td className='p-1 border border-gray-300 bg-gray-50' key={column}>
														{row[column]}
													</td>
												))}
											</tr>
										))}
									</tbody>
								</table>
							)
						) : (
							<p>Loading...</p>
						)}
					</div>
				</main>
				<footer className='px-4 py-1 border-t flex justify-between'>
					<div className='flex items-center gap-1'>
						<span
							className={
								isPending
									? 'block w-3 h-3 rounded-full bg-orange-500'
									: 'block w-3 h-3 rounded-full bg-green-500'
							}
						/>
						<small>Database: {currentLocation}</small>
						<small className='text-gray-400'>{isPending ? 'Loading' : 'Cached'}</small>
					</div>
					<button
						onClick={() => setData(null)}
						className='px-2 text-xs rounded-lg text-red-800 bg-red-100 hover:bg-red-200 transition'
					>
						Clear Cache
					</button>
				</footer>
			</div>
		</div>
	)
}
