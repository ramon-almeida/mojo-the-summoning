const { describe, test, expect, beforeAll, afterAll } = require('@jest/globals')
const { Card } = require('.')
const { db } = require('../db/config.js')

// define in global scope
let card

// clear db and create new user before tests
beforeAll(async () => {
    await db.sync({ force: true })
    card = await Card.create({ name: 'ramonidas' })
  })
// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('Card', () => {
    test('has an id,name,mojo,stamina,imgUrl', async () => {
      expect(card).toHaveProperty('id','name', 'mojo', 'stamina', 'imgUrl' )
    })
    test('has the correct username', async () => {
        expect(card.name).toBe('ramonidas')
    })
    test('can update name', async () => {
        const newUsername = 'newRamonidas'
        await card.update({name: newUsername})
    })


})