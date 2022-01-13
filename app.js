const fs = require('fs');
// import * as fs from 'fs';

fs.writeFileSync('notes.txt', 'Simple text file.');
try {
    fs.appendFileSync('notes.txt', '\tText to append');
    console.log('The "data to append" was appended to file!');
} catch (err) {
    console.error("There was an error")
}