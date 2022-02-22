const fs = require('fs');
const chalk = require('chalk');


const getNotes = function(){
    return "Your notes ...";
}

const addNote = function( title, body ){

    const notes = loadNotes();

    const duplicateNotes = notes.filter( function( note ) {
        return note.title === title;
    });

    if( duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        });
        console.log( chalk.green.inverse('New note added') );
    } else {
        console.log( chalk.red.inverse('Note title exist') );
    }

    saveNotes( notes );
}


const removeNote = function( title ){

    const notes = loadNotes();

    const updatedNotes = notes.filter( function( note ) {
        return note.title !== title;
    });

    saveNotes( updatedNotes );
    if( updatedNotes.length < notes.length ){
        console.log( chalk.green.inverse("Note removed") );
    } else {
        console.log( chalk.red.inverse("No notes removed") );
    }

}

const saveNotes = function( notes ){

    const notesJson = JSON.stringify( notes )
    fs.writeFileSync( 'notes.json', notesJson  );
}

const loadNotes = function(){

    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();

        return JSON.parse( dataJson );
    } catch( error ){
        return [];
    }
}

// module.exports = getNotes;
module.exports = {
    getNotes : getNotes,
    addNote: addNote,
    removeNote: removeNote
}

