



// import the rest of your models above
const { User } = require('./User.js');
const { Card } = require('./Card.js');
const { Attack } = require('./Attack.js');
const { Deck } = require('./Deck.js')
//set up the associations here
User.hasOne(Deck); // User can have one Deck
Deck.belongsTo(User); // Deck belongs to a User
Deck.hasMany(Card); // Deck can have many Cards
Card.belongsTo(Deck); // Card belongs to a Deck
Card.belongsToMany(Attack, { through: "CardAttack" }); // Card can have many AttacksAttack.belongsToMany(Card, { through: "CardAttack" }); // Attack can belong to many Cards




// and then export them all below
module.exports = {
    User,
    Card,
    Attack,
    Deck
  };
  