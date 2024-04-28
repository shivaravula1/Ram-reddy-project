const mongoose = require('mongoose');

const mongoDBUrl = process.env.MONGODB_URI || 'mongodb+srv://ramreddy4377:Ramreddy@ramdb.pft9agj.mongodb.net/?retryWrites=true&w=majority&appName=Feedback"';

mongoose.connect(mongoDBUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

});

mongoose.connection.on('connected', () => {
    console.log('MongoDB connected successfully');
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
    process.exit(-1);
});

module.exports = mongoose;
