const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


//Todo.remove({}).then((result) => {
//    console.log(result);
//});

//Todo.findByIdAndRemove('5b139cfa71626210dc90b2fd').then((result) => {
//    console.log(result);
//});
//

Todo.findOneAndRemove({
    _id: '5b139cfa71626210dc90b2fd'
}).then((result) => {
    console.log(result);
});
