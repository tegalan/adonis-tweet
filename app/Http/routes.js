'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

// Route.on('/').render('welcome')
Route.get('/','HomeController.index').as('home')
Route.get('profile', 'UserController.profile')
    .as('user:profile')
    .middleware('auth')
Route.get('login', 'UserController.loginpage')
Route.post('login', 'UserController.login').as('user:login')
Route.get('logout', 'UserController.logout').as('user:logout')
Route.get('/users', 'UserController.index')

Route.post('/post', 'PostController.store').as('post:store')

Route.get('/:username', 'UserController.show').as('user:show')
