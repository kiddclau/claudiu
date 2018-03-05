const mongoose = require('mongoose');

// Book Schema
const bookSchema = mongoose.Schema({
	nume_produs:{
		type: String,
		required: true
	},
	categorie:{
		type: String,
		required: true
	},
	alte_detalii:{
		type: String
	},
	pret:{
		type: String,
		required: true
	},
	marime:{
		type: String
	},

	featured:{
		type: String
	},

	image_url:{
		type: String
	},

	create_date:{
		type: Date,
		default: Date.now
	}
});

const Book = module.exports = mongoose.model('Book', bookSchema);

// Get Books
module.exports.getBooks = (callback, limit) => {
	Book.find(callback).limit(limit);
}

// Get Books////am adaugat conditia pe make dupa ce am editata si app.js cu req.params.make--Functii Website
module.exports.getFeteBotezLumanari = (categorie, callback) => {
	var queryc = {"categorie": "Fete-Botez-Lumanari"};
	Book.find(queryc,callback);
}


module.exports.getFeteBotezTrusouri = (categorie, callback) => {
	var queryz = {"categorie": "Fete-Botez-Trusouri"};
	Book.find(queryz,callback);
}

module.exports.getFeteBotezRochite = (categorie, callback) => {
	var queryroc = {"categorie": "Fete-Botez-Rochite"};
	Book.find(queryroc,callback);
}

module.exports.getBaietiBotezLumanari = (categorie, callback) => {
	var querym = {"categorie": "Baieti-Botez-Lumanari"};
	Book.find(querym,callback);
}

module.exports.getBaietiBotezTrusouri = (categorie, callback) => {
	var queryb = {"categorie": "Baieti-Botez-Trusouri"};
	Book.find(queryb,callback);
}

module.exports.getBaietiBotezCostume = (categorie, callback) => {
	var querycos = {"categorie": "Baieti-Botez-Costume"};
	Book.find(querycos,callback);
}

//Cadouri functions
module.exports.getPernite = (categorie, callback) => {
	var queryp = {"categorie": "Cadouri-Pernite"};
	Book.find(queryp,callback);
}

module.exports.getCadouriJucarii = (categorie, callback) => {
	var queryj = {"categorie": "Cadouri-Jucarii"};
	Book.find(queryj,callback);
}

module.exports.getTricouri = (categorie, callback) => {
	var queryt = {"categorie": "Cadouri-Tricouri"};
	Book.find(queryt,callback);
}

module.exports.getFeatured = (featured, callback) => {
	var queryft = {"featured": "Y"};
	Book.find(queryft,callback);
}
//

module.exports.getAllProduse = (callback, limit) => {
	Book.find(callback).limit(limit);
}
//

// Get Book
module.exports.getBookById = (id, callback) => {
	Book.findById(id, callback);
}

// Add Book
module.exports.addBook = (book, callback) => {
	Book.create(book, callback);
}

// Update Book
module.exports.updateBook = (id, book, options, callback) => {
	var query = {_id: id};
	var update = {
		nume_produs: book.nume_produs,
		categorie: book.categorie,
		alte_detalii: book.alte_detalii,
		pret: book.pret,
		marime: book.marime,
		featured: book.featured,
		image_url: book.image_url
}
	Book.findOneAndUpdate(query, update, options, callback);
}

// Delete Book
module.exports.removeBook = (id, callback) => {
	var query = {_id: id};
	Book.remove(query, callback);
}
