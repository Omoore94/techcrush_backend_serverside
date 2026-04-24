//server setup.
const express = require('express');

const app = express();

//GET all users 
app.get('/users', (req, res) => {
    res.status(200).json(users);
});


const users = [
    {id: 1, name: 'Alice', email: 'alice@example.com'},
    {id: 2, name: 'Paul', email: 'paul@example.com'}
];

//GET all users 
app.get('/users', (req, res) => {
    res.status(200).json(users);
});

//GET  a single user by id. 
app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);  //requests are received/iniated from client header. 
    const user = users.find( u => u.id === id);

    if (!user) {
        return res.status(404).json({ error: 'User not found!'});
    }
    res.status(200).json(user);
});

const port = 8080; //declare port variable. 
app.listen(8080, () => {
    console.log("Server is listening on: " + port);
});
