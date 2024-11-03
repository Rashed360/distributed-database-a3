'use server'

import { Pool } from 'pg'

const clients = {
	helsinki: new Pool({ connectionString: `postgres://user:password@localhost:54321/mydb` }),
	stockholm: new Pool({ connectionString: `postgres://user:password@localhost:54322/mydb` }),
	copenhagen: new Pool({ connectionString: `postgres://user:password@localhost:54323/mydb` }),
}

export async function fetchDataFromPostgres(location, table) {
	if (!clients[String(location).toLowerCase()]) return
	try {
		const res = await clients[String(location).toLowerCase()].query(
			`SELECT * FROM ${String(table).toLowerCase()}`
		)
		return res.rows
	} catch (error) {
		console.error('Database Error:', error)
		throw new Error('Failed to Fetch Data from Database')
	}
}
