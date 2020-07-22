//CALL IN EXPRESS
const express = require('express');
//CALL IN PATH(to handle file paths)
const path = require('path');
//INITIALIZE VARIABLE APP W/ EXPRESS
const app = express();
//GET REQUEST=go to webpage '/'(ROUTE)
// a = request
// b = response
//FUNCTION
//--app.get('/', (a, b) => {
//.send = send response to browser
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

//SET PORT NUMBER
//(process.env.PORT=want to look at evironment variable called PORT)
//(if server port not available will run on 5000)
const PORT = process.env.PORT || 5000;
//APP HAS PROPERTY LISTEN (USED TO RUN WEB SERVER) FOR PORT
//CONSOLE LOG TO SEE WHAT PORT USED
app.listen(PORT, () => console.log(`SERVER STARTED ON ${PORT}`));