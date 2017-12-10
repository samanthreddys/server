/* var obj = {
    name:"Srihitha"

};

var stringObj= JSON.stringify(obj);
console.log(obj);
console.log(typeof stringObj);
console.log(stringObj);

var personString = '{"name": "Srihitha","age": 3,"Gender": "female"}';
var person = JSON.parse(personString);
console.log(typeof person);
console.log(person); */

const fs = require('fs');
var originalNote = { title: "My Secrets", body:"my body"};
var originalNoteString = JSON.stringify(originalNote);

//originalNoteString 
fs.writeFileSync("notes.json",originalNoteString);
var noteString = fs.readFileSync("notes.json");

// note
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);