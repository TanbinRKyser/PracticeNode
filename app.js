/* const name = require('./utils.js')

    console.log( name ); 
*/

/* const add = require('./utils')
const sum = add(4,-2);
console.log( sum ); */

/* const notes = require('./notes.js')
const note = notes();
console.log( note ); */

/* const notes = require('./notes.js');
const validator = require('validator');

const note = notes();

console.log( note );
console.log( validator.isURL('tusker@gmail') );
console.log( validator.isEmail('tusker@gwcp.com') ); */

const chalk = require('chalk');

const greenMessage = chalk.green.inverse.bold('Success!');
console.log( greenMessage );
// console.log( chalk.bold( greenMessage ));
// console.log( chalk.inverse( greenMessage ));