const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    
    if(err) {
        return console.log('Unable to connect MongoDB server');
    }
    console.log('Connected to MongoDB server');
   
//    db.collection('Todos').findOneAndUpdate(
//        {
//            _id: new ObjectID('5b1149bef23f82f9d0c7f698')
//        }, 
//        {
//            $set: {
//                completed: true    
//            }
//        }, {
//            returnOriginal: false
//        }).then((result) => {
//        console.log(result);
//    });
    
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b0fbe290623a93190bfb3e0')
    }, {
        $set: {
            name: 'Parth'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
    
    
//    db.close();
});