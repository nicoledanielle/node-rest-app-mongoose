'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const {DATABASE_URL} = require('./config');

mongoose.connect( DATABASE_URL, { useMongoClient: true }, 
  err => { console.log(err);
  });

const favoriteSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  votes: { type: Number, default: 0},
  comment: String,
});

const Favorite = mongoose.model('Favorite', favoriteSchema);

// Favorite
//   .create({
//     name: 'The Hitchhiker’s Guide to the Galaxy',
//     comment: 'I won’t enjoy it. –Marvin',
//     votes: 42
//   })
//   .then(favorite => {
//     console.log('Created favorite:', favorite.name);
//   })
//   .catch(err => {
//     console.error('Something went wrong:', err);
//   });

// Favorite.find({})
//   .then(favorites => {
//     console.log('Read favorites:', favorites);
//   })
//   .catch(err => {
//     console.error('Somethingwent wrong:', err);
//   });

Favorite.remove()
  .then((results) => {
    console.log(results);
  });