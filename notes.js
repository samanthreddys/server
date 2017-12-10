const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync("notes-data.json");
        return JSON.parse(notesString);
    } catch (e) {
        return [];

    }
};

var saveNotes = (notes) => {
    fs.writeFileSync("notes-data.json", JSON.stringify(notes));

};
var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    var duplicateNotes = notes.filter((note) => {
        return note.title === title;
    });

    if (duplicateNotes.length === 0) {

        notes.push(note);
        saveNotes(notes);
        return note;

    }

};

var getAll = () => {
    var notes = fetchNotes();
    return notes;

};

var getNote = (title) => {

    var notes = fetchNotes();
    var readNoteTitle = notes.filter((note) => {
        return note.title === title;
    });
    return readNoteTitle[0];

};
var deleteNote = (title) => {
    var notes = fetchNotes();
    var filteredNoteTitle = notes.filter((note) => {
        return note.title !== title;
    });
    saveNotes(filteredNoteTitle);
    return notes.length !== filteredNoteTitle.length;

};

var logNote = (note) => {
    debugger;
    console.log(`Note Created -- Title:  ${note.title}, Body:  ${note.body}`);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    deleteNote,
    logNote
};