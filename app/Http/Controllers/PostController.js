'use strict'

const Post = use('App/Model/Post')
const Validator = use('Validator')

class PostController {
    
    * store(request, response) {
        let text = request.input('text')
        let user = yield request.auth.getUser()

        let post = {text:text, user_id: user.id}

        const validation = yield Validator.validate(post, Post.rules)

        if(validation.fails()){
            yield request
                .withOnly('text')
                .andWith({ errors: validation.messages() })
                .flash()
            
            response.redirect('back')
            return
        }

        yield Post.create(post)
        response.redirect('/')
    }

}

module.exports = PostController
