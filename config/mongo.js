// config/mongo.js
const mongoose = require('mongoose').set('debug', true);
const options = {
    autoReconnect: true
}

const url = 'mongodb://user:user1234@localhost:27017/local_library'

module.exports = {
    connect: ()=> {            
        mongoose.connect(url,options)
        let db = mongoose.connection
        db.on('error', console.error.bind(console, '连接错误:'));
        db.once('open', ()=> {
            console.log('mongodb connect success');
        })
    }
}