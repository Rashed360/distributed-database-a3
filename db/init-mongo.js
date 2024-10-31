db = db.getSiblingDB('mydb')

db.createCollection('users')
db.users.insertMany([
	{ name: 'User1', email: 'user1@example.com' },
	{ name: 'User2', email: 'user2@example.com' },
	{ name: 'User3', email: 'user3@example.com' },
	{ name: 'User4', email: 'user4@example.com' },
	{ name: 'User5', email: 'user5@example.com' },
])
