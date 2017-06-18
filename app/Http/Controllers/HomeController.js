'use strict'

const Post = use('App/Model/Post')
const User = use('App/Model/User')

class HomeController {
    
    *index(request, response) {

        const posts = yield Post.query()
            .with('user')
            .orderBy('created_at','desc')
            .fetch()

        const users = yield User.all()

        // response.ok(posts)

        yield response.sendView('home',{ posts: posts.toJSON(), users: users.toJSON() })
        
    }

}

module.exports = HomeController
