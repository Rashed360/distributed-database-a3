'use server'

import { Pool } from 'pg'

const clients = {
	helsinki: new Pool({ connectionString: process.env.HELSI_DB_URL }),
	stockholm: new Pool({ connectionString: process.env.STOCK_DB_URL }),
	copenhagen: new Pool({ connectionString: process.env.COPEN_DB_URL }),
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
