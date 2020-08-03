//CALL IN EXPRESS
const express = require('express');
//CALL IN PATH(to handle file paths)
const path = require('path');
//CALL IN Member.js(makes variable members array available)
const members = require('./Members');
//INITIALIZE VARIABLE APP W/ EXPRESS
const app = express();

//**ROUTES**//
//GET REQUEST=go to webpage '/' and return
// a = request
// b = response
//FUNCTION
//--app.get('/', (a, b) => {
//.send = send response from browser
//--b.send('<h1>ITS WORKING!</h1>')
// .sendFILE(w/ PATH now) 
// path.join = combine informaiton into directory name: public/index.html
//--b.sendFile(path.join(__dirname, 'public', 'index.html'))
//--});
//FUNCTION w/ STATIC FOLDER
// .use(middleware) = defines what path to use for webpage
// express.static(middleware) = sets common location to get webpage
// path.join = combine informaiton into directory name: public/index.html
app.use(express.static(path.join(__dirname, 'public')));
//hard coded array to show JSON return
//**Array moved to Members.js to try EXPORT**//
// const members = [{
//         id: 1,
//         name: "Jon",
//         age: 30,
//         status: "alive"
//     },
//     {
//         id: 2,
//         name: "Don",
//         age: 15,
//         status: "alive"
//     },
//     {
//         id: 3,
//         name: "Ron",
//         age: 85,
//         status: "dead"
//     },
// ];
//**ROUTES - API**//
//**GETS ALL MEMBERS**//
//GET REQUEST=go to webpage '/' and return
// c = request
// d = response
//--app.get('/api/members', (c, d) => {
//.json = send response from browser in json form member array
//--d.json(members);
//--});
//code cleaned up(no need for curly bracket since => funtion and 1 response(members))
app.get('/api/members', (c, d) => d.json(members));
//**ROUTES - API**//
//**GETS SINGLE MEMBER**//
//code cleaned up(no need for curly bracket since => funtion and 1 response(members))
// :id = section in 
app.get('/api/members/:id', (c, d) => {
    //--d.send(c.params.id);
    //some method-check to see if member exsists (true or false)
    const found = members.some(member => member.id === parseInt(c.params.id));
    //if member is found respond with JSON
    //will respond 200 in POSTMAN
    if (found) {
        d.json(members.filter(member => member.id === parseInt(c.params.id)));
    } else {
        //if member is not found respond with JSON msg
        //change page status to BAD REQUEST
        d.status(400).json({ msg: `Member: ${c.params.id} Request Invalid` })

    }

});

//SET PORT NUMBER
//(process.env.PORT=want to look at evironment variable called PORT)
//(if server port not available will run on 5000)
const PORT = process.env.PORT || 5000;
//APP HAS PROPERTY LISTEN (USED TO RUN WEB SERVER) FOR PORT
//CONSOLE LOG TO SEE WHAT PORT USED
app.listen(PORT, () => console.log(`SERVER STARTED ON ${PORT}`));