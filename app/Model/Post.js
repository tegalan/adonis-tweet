'use strict'

const Lucid = use('Lucid')

class Post extends Lucid {

    static get rules() {

        return {
            text: 'required',
            user_id: 'required'
        }
        
    }

    user() {
        return this.belongsTo('App/Model/User')
    }

}

module.exports = Post
