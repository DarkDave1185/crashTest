//CALL IN EXPRESS
const express = require('express');
//CALL IN PATH(to handle file paths)
const path = require('path');
const members = require('./Members');
//unneeded after api routes moved
//--const router = require('./routes/api/members');
//CALL IN Member.js(makes variable members array available)
//moved to members route file
//--const members = require('./Members');
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

//**BODY PARSE MIDDLEWARE**//
//handle json data
app.use(express.json());
//handle url encoded data
app.use(express.urlencoded({ extended: false }));

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

//MEMEBERS API ROUTES//
//this consolidates router.get in members.js
app.use(`/api/members`, require(`./routes/api/members`));

//**ROUTES - API**//(moved to member.js)
//**Routes moved to routes/api/members.js to EXPORT**//
//**GETS ALL MEMBERS**//
//GET REQUEST=go to webpage '/' and return
// c = request
// d = response
//--app.get('/api/members', (c, d) => {
//.json = send response from browser in json form member array
//--d.json(members);
//--});
//code cleaned up(no need for curly bracket since => funtion and 1 response(members))
//--app.get('/api/members', (c, d) => d.json(members));

//**ROUTES - API**//(moved to member.js)
//**GETS SINGLE MEMBER**//
//code cleaned up(no need for curly bracket since => funtion and 1 response(members))
// :id = section in 
//--app.get('/api/members/:id', (c, d) => {
//--d.send(c.params.id);
//some method-check to see if member exsists (true or false)
//--const found = members.some(member => member.id === parseInt(c.params.id));
//if member is found respond with JSON
//will respond 200 in POSTMAN
//--if (found) {
//--d.json(members.filter(member => member.id === parseInt(c.params.id)));
//--} else {
//if member is not found respond with JSON msg
//change page status to BAD REQUEST
//--d.status(400).json({ msg: `Member: ${c.params.id} Request Invalid` })

//--}

//--});

//**CREATE MEMBER**(checkPOSTMAN for good post)//(moved to member.js)
//--router.post(`/`, (c, d) => {
//--d.send(c.body);
//--});

//**CREATE MEMBER**//(moved to member.js)
//--router.post(`/`, (c, d) => {
//--const newmemeber = {
//uuid.v4 = generates random id nuber for member
//--id: uuid.v4(),
//--name: c.bony.name,
//--age: c.body.age,
//status set to active for every member added
//--status: `active`
//--}
//if name or age not filled in will send msg
//-- if(!newMember.name || !newMemeber.age){
//change page status to 400
//page display msg
//--d.status(400).json({ msg: `Name and Age are required` })
//--}
//--members.push(newMember);
//--});

//**UPDATE MEMBER**//
//similar to get single member but a PUT request
//makes a put request to the member id
//--router.get('/:id', (c, d) => {
//check if member is found
//--const found = members.some(member => member.id === parseInt(c.params.id));
//--if (found) {
//--const updatedMember = c.body;
//check members array 
//--members.forEach(member=>{
//--if(member.id === parseInt(c.body.id)){
//check name and age if changed then update
//--member.name = updatedMember.name ? updatedMember.name : member.name;
//--member.age = updatedMember.age ? updatedMember.age : member.age;
//send msg if member information has changed
//--d.json({msg: `Member Information Updated`, member:});
//--}
//--});
//--} else {
//--d.status(400).json({ msg: `Member: ${c.params.id} Request Invalid` })
//--}
//--});

//SET PORT NUMBER
//(process.env.PORT=want to look at evironment variable called PORT)
//(if server port not available will run on 5000)
const PORT = process.env.PORT || 5000;
//APP HAS PROPERTY LISTEN (USED TO RUN WEB SERVER) FOR PORT
//CONSOLE LOG TO SEE WHAT PORT USED
app.listen(PORT, () => console.log(`SERVER STARTED ON ${PORT}`));