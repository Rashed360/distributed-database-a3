import Preview from './preview'
import { Client } from 'pg'

const clients = {
	helsinki: new Client({ connectionString: 'postgres://user:password@postgres:54321/mydb' }),
	stockholm: new Client({ connectionString: 'postgres://user:password@postgres:54322/mydb' }),
	copenhagen: new Client({ connectionString: 'postgres://user:password@postgres:54323/mydb' }),
}

// clients.helsinki.connect()
// clients.stockholm.connect()
// clients.copenhagen.connect()

export default function Home() {
	const locations = ['Helsinki', 'Stockholm', 'Copenhagen']
	const tables = [
		{ name: 'Workers', frag: false, repl: true },
		{ name: 'WorkerData', frag: true, repl: false },
		{ name: 'Projects', frag: false, repl: true },
		{ name: 'ProjectWorker', frag: true, repl: true },
	]

	const fetcher = async location => {
		'use server'
		let response

		switch (location) {
			case locations[0]:
				await clients.helsinki.connect()
				response = await clients.postgres.query('SELECT * FROM Workers')
				await clients.postgres.end()
				return response.rows

			default:
				throw new Error('Invalid Location')
		}
	}

	return (
		<div className='p-2 flex h-screen justify-center items-center'>
			<Preview locations={locations} tables={tables} fetchFromDatabase={fetcher} />
		</div>
	)
}
