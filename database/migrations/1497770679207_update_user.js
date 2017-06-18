'use strict'

const Schema = use('Schema')

class UsersTableSchema extends Schema {

  up () {
    this.table('users', (table) => {
      table.string('name').after('username')
    })
  }

  down () {
    this.table('users', (table) => {
      table.dropColumn('name')
    })
  }

}

module.exports = UsersTableSchema
