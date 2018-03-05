const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

Genre =require('./models/genre');
Book =require('./models/book');

// Connect to Mongoose
//mongoose.connect('mongodb://localhost/bookstore');
mongoose.connect('mongodb://admin:admin@cluster0-shard-00-00-bko6b.mongodb.net:27017,cluster0-shard-00-01-bko6b.mongodb.net:27017,cluster0-shard-00-02-bko6b.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');


var db = mongoose.connection;

app.get('/', (req, res) => {
	res.send('Please use /api/books or /api/genres');
});

app.get('/api/genres', (req, res) => {
	Genre.getGenres((err, genres) => {
		if(err){
			throw err;
		}
		res.json(genres);
	});
});

app.post('/api/genres', (req, res) => {
	var genre = req.body;
	Genre.addGenre(genre, (err, genre) => {
		if(err){
			throw err;
		}
		res.json(genre);
	});
});

app.put('/api/genres/:_id', (req, res) => {
	var id = req.params._id;
	var genre = req.body;
	Genre.updateGenre(id, genre, {}, (err, genre) => {
		if(err){
			throw err;
		}
		res.json(genre);
	});
});


app.delete('/api/genres/:_id', (req, res) => {
	var id = req.params._id;
	Genre.removeGenre(id, (err, genre) => {
		if(err){
			throw err;
		}
		res.json(genre);
	});
});

app.get('/api/books', (req, res) => {
	Book.getBooks((err, book) => {
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.get('/api/produse/:_id', (req, res) => {
	Book.getBookById(req.params._id, (err, book) => {
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.post('/api/books', (req, res) => {
	var book = req.body;
	Book.addBook(book, (err, book) => {
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.put('/api/books/:_id', (req, res) => {
	var id = req.params._id;
	var book = req.body;
	Book.updateBook(id, book, {}, (err, book) => {
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.delete('/api/produse/:_id', (req, res) => {
	var id = req.params._id;
	Book.removeBook(id, (err, book) => {
		if(err){
			throw err;
		}
		res.json(book);
	});
});


app.get('/api/baietibotezlumanari', (req, res) => {
	Book.getBaietiBotezLumanari(req.params.categorie,(err, books) => {
		if(err){
			throw err;
		}
		res.json(books);
	});
});

app.get('/api/baietiboteztrusouri', (req, res) => {
	Book.getBaietiBotezTrusouri(req.params.categorie,(err, books) => {
		if(err){
			throw err;
		}
		res.json(books);
	});
});

app.get('/api/baietibotezcostume', (req, res) => {
	Book.getBaietiBotezCostume(req.params.categorie,(err, books) => {
		if(err){
			throw err;
		}
		res.json(books);
	});
});

app.get('/api/fetebotezlumanari', (req, res) => {
	Book.getFeteBotezLumanari(req.params.categorie,(err, books) => {
		if(err){
			throw err;
		}
		res.json(books);
	});
});

app.get('/api/feteboteztrusouri', (req, res) => {
	Book.getFeteBotezTrusouri(req.params.categorie,(err, books) => {
		if(err){
			throw err;
		}
		res.json(books);
	});
});

app.get('/api/fetebotezrochite', (req, res) => {
	Book.getFeteBotezRochite(req.params.categorie,(err, books) => {
		if(err){
			throw err;
		}
		res.json(books);
	});
});

//cadouri
app.get('/api/cadourijucarii', (req, res) => {
	Book.getCadouriJucarii(req.params.categorie,(err, books) => {
		if(err){
			throw err;
		}
		res.json(books);
	});
});

app.get('/api/cadouripernite', (req, res) => {
	Book.getPernite(req.params.categorie,(err, books) => {
		if(err){
			throw err;
		}
		res.json(books);
	});
});

app.get('/api/cadouritricouri', (req, res) => {
	Book.getTricouri(req.params.categorie,(err, books) => {
		if(err){
			throw err;
		}
		res.json(books);
	});
});

///featured first page
app.get('/api/', (req, res) => {
	Book.getFeatured(req.params.featured,(err, books) => {
		if(err){
			throw err;
		}
		res.json(books);
	});
});
///



app.listen(3000);
console.log('Running on port 3000...');
