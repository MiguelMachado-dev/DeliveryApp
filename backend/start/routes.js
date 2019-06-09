'use strict'

const Route = use('Route')

// Create user
Route.post('users', 'UserController.store')
// Create session JWT
Route.post('sessions', 'SessionController.store')

// Rotas para quando o user ta logado
Route.group(() => {
  Route.resource('produtos', 'ProdutoController').apiOnly()
  Route.resource('tipoprodutos', 'TipoProdutoController').apiOnly()
}).middleware(['auth'])
