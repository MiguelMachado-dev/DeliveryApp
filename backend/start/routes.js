'use strict'

const Route = use('Route')

// Create user
Route.post('users', 'UserController.store')
// Create session JWT
Route.post('sessions', 'SessionController.store')
