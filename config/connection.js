const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGDB_URI || 'mongodb://localhost:27017/test',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    }
);

module.exports = mongoose.connection;