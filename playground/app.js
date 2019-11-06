console.log('Starting app');

/**
 * !=======REQUIRE=======
 * ? require is used to import or include modules 
 * ? from nodejs or from third party liberaries or even to 
 * ? includes other modules that are part of the aplication
 */

// import fs from 'fs';

/** ==import node module== */
const fs = require('fs');
const os = require('os');
/* ==Import js module=== */
const notes = require('./notes.js.js.js');
/** ===import third part liberary == */
// ! note: nodejs will search for lodash name in node core modules then it won't find it then it will look at node_modules folder.
const _ = require('lodash');
const yargs = require('yargs')

_.forEach(['dfd', 3453, true, null], (elm) => {
    console.log(elm)
})

let res = notes.addNote();
let add = notes.add(1, 3, 4, 435435, true);
console.log(add);

console.log(res);

// os.userInfo().username

// fs.appendFileSync('greetings.txt',  `Hello ${os.userInfo().username}!`);



/**
 * ! ======TAKE USER INPUT FROM COMMAND LINE========
 */
const command = process.argv[2];
if (command === 'add') {
    console.log('adding new note');
} else if (command === 'list') {
    console.log('view all notes');
} else if (command === 'read') {
    console.log('reading note');
} else if (command === 'remove') {
    console.log('removing note');
} else {
    console.log('command is not recognize');
}