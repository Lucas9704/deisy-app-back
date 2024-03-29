import mongoose from 'mongoose'
import config from '../config';

(async () => { 
    try {
        const db = await mongoose.connect(config.mongodbURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database is connection to:' ,db.connection.name);
    }
    catch (err) {
        console.error(err)
    }
})();