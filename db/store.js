const util = require('util');
const fs = require('fs');
const readFromFile = util.promisify(fs.readFile);
const writeToFile = util.promisify(fs.writeFile);
const uuid = require("uuid/v1")

class Store {
  read() {
    return readFromFile('db/db.json', 'utf8');
  }
  write(note) {
    return writeToFile('db/db.json', JSON.stringify(note));
  }

  getNotes() {
    console.log('hi');
    return this.read();
    //make sure to parse throgh the notes 
    //CONCAT notes to the parsed notes
    //because if notes isnt an aray or cant be turned into one send back an empty array
    //return the parsed notes
  }

  addNote(note) {
    const { title, text } = note;
    console.log(title);
    if (!title || !text) {
      throw new Error(`Please add a title or text to your note.`);
    }
    const newNote = { title, text, id: uuid() };
    console.log('new note:', newNote);
    return this.getNotes()
      .then((notes) => [...notes, newNote])
      .then((updatedNotes) => this.write(updatedNotes))
      .then(() => newNote);
  }

  deleteNote(id) {
    return this.getNotes()
      .then((notes) => notes.filter((note) => note.id !== id))
      .then((updatedNotes) => this.write(updatedNotes))
      .then(() => id);
  }
}

module.exports = new Store();
