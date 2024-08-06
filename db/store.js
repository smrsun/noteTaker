const readFromFile = util.promisify(fs.readFile)
const writeToFile = util.promisify(fs.writeToFile)
class Store {
    read() {
        return readFromFile('db/db.json','utf8')
    }
    write(note) {
        return writeToFile('db/db.json', JSON.stringify(note))
    }

    getNotes() {
        return this.read()
    }

    addNote(note) {
        const{ title, text } = note
        if (!title||!text) {
            throw new Error(`Please add a title or text to your note.`);

        }
    }

    deleteNote() {

    }
}