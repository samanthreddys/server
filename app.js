const fs = require('fs');
const _ = require('lodash');
const yargs = require("yargs");


const notes = require('./notes');
const titleOptions = {
    describe: 'Title of Note',
    demand: true,
    alias: 't'
};

const bodyOptions = {
    demand: true,
    describe: "Body of the note",
    alias: 'b'
};

const argv = yargs
    .command('add', 'Add a new Note', {
        title: titleOptions,
        body: bodyOptions

    })
    .command('list', 'list of all notes')
    .command('read', 'read note by title', {
        title: titleOptions
    })
    .command('remove', 'Remove note by title', {
        title: titleOptions
    })
    .help()
    .argv;


var command = process.argv[2];


if (command === "add") {

    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        notes.logNote(note);
    } else {
        console.log("Note title exisits");
    }
}
else if (command === "list") {

    var message = notes.getAll();

    message.forEach((note) => notes.logNote(note));
} else if (command === "read") {

    var note = notes.getNote(argv.title);
    if (note) {
        notes.logNote(note);
    } else {
        console.log("Note not found");
    }
} else if (command === "remove") {

    var noteRemoved = notes.deleteNote(argv.title);
    var message = noteRemoved ? "Note removed" : "Not not found";

    console.log(message);

}
else {
    console.log("Command not recognized");
}




