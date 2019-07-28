/* eslint-disable array-callback-return */
const express = require('express');
const app = express();
const cors = require('cors');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const PORT = 9000;
const gbRoutes = express.Router();

let GbSign = require('./GbSign.model');



app.use(cors());
app.use(bodyparser.json());

mongoose.connect('mongodb://127.0.0.1:27017/GbSigns', { useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB Database connection established successfully to the guest book");
})

gbRoutes.route('/').get(function(req, res) {
    GbSign.find(function(err, todos) {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});

gbRoutes.route('/:id').get(function(req, res){
    let id = req.params.id;
    gbRoutes.findById(id, function(err, todo){
        res.json(todo);
    });
});

gbRoutes.route('/add').post(function(req, res){
    let gbsign = new GbSign(req.body);
    gbsign.save()
    .then(gbsign => {
        res.status(200).json({'Guestbook': 'Successfully signed'});
    })
    .catch(err => {
        res.status(400).send('Signing Failed');
    });
});


app.use('/Guestbook', gbRoutes)

app.listen(PORT, function(){
    console.log("Server is running on port: " + PORT);
}
);