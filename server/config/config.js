// ============
// Puerto
// ============

process.env.PORT = process.env.PORT || 3000;

// ============
// Entorno
// ============

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ============
// bbdd
// ============

let urlDB;

if ( process.env.NODE_ENV === 'dev') {
  urlDB = 'mongodb://localhost:27017/cafe';
} else {
  urlDB = 'mongodb+srv://maserati:4g3YtBGPXTSpLe7@cluster0-i5ds7.mongodb.net/cafe';
}

process.env.URLDB = urlDB;
