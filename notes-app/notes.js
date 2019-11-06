const fs = require('fs');

const addNotes = (title, body) => {
    /***
     * * GET ARR FROM FILE TO ADD IT AGAIN.
     */

    let notes = featchNotes();

    /**
     * * PREVENT TITLE DUPLICATE
     */
    const filteredNotes =  notes.filter((elm) => elm.title === title);
    if (filteredNotes.length > 0) {
        return;
    }
    /**
     * * ADDING NEW NOTE TO THE ARRAY
     */
    const note = {
        title,
        body
    };
    notes.push(note);
    saveNote(notes);
    return note;
};

const removeNote = (title) => {
    let notes = featchNotes();
    let filtednotes = notes.filter((elm) => elm.title !== title);
    if(filtednotes.length === notes.length) {
        return;
    } else {
        saveNote(filtednotes);
        return true;
    }
};
const listNotes = () => {
    return featchNotes();
};
const readNote = (title) => {
    const notes = featchNotes();
    const note = notes.filter((note) => note.title === title)[0];
    return note;
};
const removeAllNotes = () => {
    saveNote(null)
};

module.exports = {
    addNotes,
    listNotes,
    removeNote,
    readNote,
    removeAllNotes
};


const featchNotes = () => {
    try {
        return JSON.parse(fs.readFileSync('note-data.json'));
    } catch (error) {
        return []
    }
}
const saveNote = (notes) => {
    fs.writeFileSync('note-data.json', JSON.stringify(notes));
}