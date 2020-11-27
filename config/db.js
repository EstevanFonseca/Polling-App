const mongoose = require('mongoose');

//Map global promises
mongoose.Promise = global.Promise;
//Mongoose connect
mongoose.connect('mongodb+srv://Estevan:mongocloud@pusherpoll.z4x9a.mongodb.net/pusherpoll?retryWrites=true&w=majority')
.then(() => console.log('MongoDB connected'))  
.catch(err => console.log(err)); 