const mongoose = require('mongoose');


// double check the rapidrefresh part i dont remember where i get that from
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/rapidrefresh');

module.exports = mongoose.connection;