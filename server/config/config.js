// -------Puerto------------

process.env.PORT = process.env.PORT || 3000;

// -------Entorno------------

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// -------Vencimiento del Token------------

process.env.CADUCIDAD_TOKEN = '48h';

// -------SEED de autenticación------------

process.env.SEED = process.env.SEED || 'seed-de-desarrollo';

// -------Base de datos------------

let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

// -------Google Client ID------------

process.env.CLIENT_ID = process.env.CLIENT_ID || '982519231838-89aptm6fj4m3otijeh72dt6k8aa09ipo.apps.googleusercontent.com';