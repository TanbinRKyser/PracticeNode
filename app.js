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

/* const chalk = require('chalk');

const greenMessage = chalk.green.inverse.bold('Success!');
// const greenMessage = chalk.bold('Hello world');
console.log( greenMessage );
// console.log( chalk.bold( greenMessage ));
// console.log( chalk.inverse( greenMessage )); */


const notes = require('./notes.js');
const yargs = require('yargs');
const chalk = require('chalk');

// console.log( process.argv );
// console.log( yargs.argv );

// const command = process.argv[2];

/* if( command === 'add'){
    console.log('Adding Note');
} else if( command === 'remove' ){
    console.log('Removing Note');
} */

// custom yarg version
yargs.version('1.0.1');

// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe: "Note Title",
            demandOption: true,
            type: 'string'
        },
        body:{
            describe:'Note Content',
            demandOption: true,
            type: 'string'
        }
    },
    handler( argv ){
        // console.log('Adding a new note', argv );
        // console.log('Title: ', argv.title );
        // console.log(' - ', argv.body );
        notes.addNote( argv.title, argv.body );
    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title:{
            describe: "Note Title",
            demandOption: true,
            type: 'string'
        }
    },
    handler( argv ){
        // console.log('Removing a note');
        notes.removeNote( argv.title );
    }
})

// create list command
yargs.command({
    command: 'list',
    describe: 'List of notes',
    handler(){
        console.log('List of notes');
    }
})

// create read command
yargs.command({
    command: 'read',
    describe: 'Reading a note',
    handler(){
        console.log('Reading a note');
    }
})


// console.log( yargs.argv );
yargs.parse();