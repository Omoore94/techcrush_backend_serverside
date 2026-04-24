//Creating/Setting up a server. 
//1. install express => npm install express
//2. import the express module. 
//3. Define routes
//4. Start listening. 



//Step 1: Import the express module. 
const express = require('express');


//Step 2: Create an Expresss app instance. 
const app = express();

//Step 3: Define a route handler for GET requests to /
app.get('/', function(req, res) {   //parameters => route, callbck functn
    res.send('Hello, World! Welcome to Express.js');
});

//response => delivering a message to the client.
//request => asking the client for a data/information.

//Creating different routes to further explain
app.get('/about', (req, res) => {
    res.send("This is the about page!");
});

app.get('/contact', (req, res) => {
    res.send("You can contact us on this number: 08143253894");
});

app.get('/signup', (req, res) => {
    res.send('Please log in!');
});

//Json Data = A form of data.
//Json is an array of object. That is what your browser understands. 
//Note, your browser does not understand javascript. It understands Json Data
//You have an objects inside an array. 
//Js objects, keys are written in normal text, but json data, the keys are written as strings. 
const studentInfo = [
    {name: "Paul", age: 30, grade: "A"},  //this is a js data => keys is not written in string format.
    {name: "Amara", age: 28, grade: "A"},
    {name: "John", age: 35, grade: "C"},
    
];

app.get('/all-data', (req, res) =>{
    res.json(studentInfo) //converts the js data in studentinfo to jsonn data to enable browser reading.
});



//Step 4: Start listening on port 3000
//app.listen takes 3 parameters - port num, hostname(optional), callback functn
app.listen(3000, function(){ //port num is any 4 or 5 digits that is used to connect your server.
    console.log('Server is up and running');  //to verify ur server is truly running on the browser.
});


//ROUTING => refers to how an application responds to a client request to a particular endpoint (URL/path) and a specific HTTP method. 
//examples of HTTP method (get, post, put, patch, use, delete)


//Middleware => Is a function that has access to the request object (req), the response object (res), and a function called next
//that passes control to the next middleaware. Middleware runs betwn the moment a request arrives
//and the moment a response is sent. 

//Types of middleware in express.
//1. Application level => app.use() or app.METHOD()
//2. Router-level => express.Router()
//3. Error handling => takes 4 arg (err, req, res, nex)
//4. Built in => express.json() and express.static()
//5. Third party => installed via npm.

//NOTE
//Our server understands/uses JS data, the client understands/uses json data