const { log } = require('console');
const fs = require('fs');

const fetchNotes = () =>
{
    try
    {
        return JSON.parse(fs.readFileSync('notes.txt'));
    } catch (error)
    {
        return [];
    }
};

const addNote = (title, body) =>
{
    const notes = fetchNotes();

    const filteredNote = notes.filter((note) => note.title === title);

    if (filteredNote.length == 0)
    {
        const note = {
            title,
            body,
        };

        notes.push(note);

        fs.writeFileSync('notes.txt', JSON.stringify(notes));

        logNote(note);
    }

    else
    {
        console.log("STOP: Title already exists!");
    }
 
};

const removeNote = (title) =>
{
    const notes = fetchNotes();
    const existingNote = notes.filter((note) => note.title === title);

    if (existingNote.length > 0)
    {
        const filteredNotes = notes.filter((note) => note.title !== title);

        fs.writeFileSync('notes.txt', JSON.stringify(filteredNotes));
    }

    else
    {
        console.log("STOP: Note does not exist!");
    }
    
};

const readNote = (title) =>
{
    const notes = fetchNotes();
    const filteredNote = notes.filter((note) => note.title === title);

    if (filteredNote.length > 0)
    {
        logNote(filteredNote[0]);

    }
    else
    {
        console.log("Note does not exist!");
    }
};

const listNotes = () => {
  const notes = fetchNotes();

  if (notes.length < 0) {
    console.log('No notes present!');
  } else {
    notes.forEach((note) => logNote(note));
  }
};

const logNote = (note) =>
{
    console.log('* * * * * * * * * * * * *');
    console.log();
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

module.exports = {
  addNote,
  removeNote,
  readNote,
  listNotes,
};



