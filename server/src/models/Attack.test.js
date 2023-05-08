const { describe, test, expect, beforeAll, afterAll } = require('@jest/globals')
const { Attack } = require('.')
const { db } = require('../db/config.js')

// define in global scope
let attack

// clear db and create new user before tests
beforeAll(async () => {
    await db.sync({ force: true })
    attack = await Attack.create({ title: '21 savage', mojoCost: 20, staminaCost: 50 })
  })
// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('Attack', () => {
    test('has an id,title,mojoCost,staminaCost', async () => {
      expect(attack).toHaveProperty('id','title', 'mojoCost', 'staminaCost' )
    })
    test('has the correct title', async () => {
        expect(attack.title).toBe('21 savage')
    })
    test('can update title', async () => {
        const newUsername = 'Ramon'
        await attack.update({title: newUsername})
    })


})