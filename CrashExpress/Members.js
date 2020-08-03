const members = [{
        id: 1,
        name: "Jon",
        age: 30,
        status: "alive"
    },
    {
        id: 2,
        name: "Don",
        age: 15,
        status: "alive"
    },
    {
        id: 3,
        name: "Ron",
        age: 85,
        status: "dead"
    },
];
//takes this file and makes content usable as variables
//needs (const members = require('./Members)) on index.js
module.exports = members;