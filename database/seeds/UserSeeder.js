'use strict'

const Factory = use('Factory')
const User = use('App/Model/User')

class UserSeeder {

  * run () {
    // run model/database factories here

    yield User.create({
      username: 'admin',
      name: 'Ngadimin',
      email: 'admin@pringstudio.com',
      password: 'admin'
    })

    
  }

}

module.exports = UserSeeder
