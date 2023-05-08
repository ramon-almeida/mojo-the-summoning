const { describe, test, expect, beforeAll, afterAll } = require('@jest/globals')
const { User } = require('.')
const { db } = require('../db/config.js')

// define in global scope
let user 

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  user = await User.create({ username: 'gandalf' })
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('User', () => {
  test('has an id', async () => {
    expect(user).toHaveProperty('id')
  })
  test('has the correct username', async () => {
    expect(user.username).toBe('gandalf')
  })
  test('can update username', async () => {
    const newUsername = 'saruman'
    await user.update({username: newUsername})

  
  })

})

