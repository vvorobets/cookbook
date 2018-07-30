const mongoose = require('mongoose');

const Recipe = new mongoose.Schema({
	id: { type: Number, required: true, unique: true },
	title: {type: String},
	description: {type: String},
	rating: {type: Number}
	// createdAt: String,
	// updatedAt: String
}, {
  collection: 'recipes'
	// versionKey: false
});

module.exports = mongoose.model('Recipe', Recipe);