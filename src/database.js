import mongoose from 'mongoose'
import config from './config';

(async () => { 
    const db = await mongoose.connect("mongodb://localhost/deisyapi", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('Data base is connection to: ' ,db.connection.name);
})();