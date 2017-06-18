'use strict'

const User = use('App/Model/User')
const Post = use('App/Model/Post')

class UserController {

    * loginpage(request, response) {
        yield response.sendView('user/login')
    }

    * login(request, response) {
        const username = request.input('username')
        const password = request.input('password')
        const login = yield request.auth.attempt(username, password) 

        if (login) {
            response.redirect('/')
            return
        }

        response.unauthorized('Invalid credentails')
    }

    * profile (request, response) {
        const user = yield request.auth.getUser()
        const posts = yield Post.query()
            .with('user')
            .where('user_id',user.id)
            .fetch()

        if (user) {
            // response.ok(user)
            yield response.sendView('user/profile', {user: user, posts: posts.toJSON()})
            return
        }
        response.unauthorized('You must login to view your profile')
    }

    * show(request, response) {
        const username = request.params('username').username
        const user = yield User.findBy('username',username)
        const posts = yield Post.query()
            .with('user')
            .where('user_id',user.id)
            .fetch()
        
        yield response.sendView('user/profile', {user: user.toJSON(), posts: posts.toJSON()})

        response.ok(profile)
    }

    * index(request, response) {
        const users = yield User.all()

        response.ok(users)
    }

    * logout(request, response) {
        yield request.auth.logout()

         response.redirect('/')
    }

}

module.exports = UserController
