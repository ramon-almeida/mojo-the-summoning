const { describe, test, expect, beforeAll, afterAll } = require('@jest/globals')
const { Deck } = require('.')
const { db } = require('../db/config.js')

// define in global scope
let deck

// clear db and create new user before tests
beforeAll(async () => {
    await db.sync({ force: true })
    deck = await Deck.create({ name: 'Michael Jackson' })
  })
// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('Deck', () => {
    test('has an id,name,xp', async () => {
      expect(deck).toHaveProperty('id','name', 'xp' )
    })
    test('has the correct username', async () => {
        expect(deck.name).toBe('Michael Jackson')
    })
    test('can update name', async () => {
        const newUsername = 'Drake'
        await deck.update({name: newUsername})
    })


})