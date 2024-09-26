const yargs = require('yargs');
const { addNote, removeNote, listNotes, readNote } = require('./notes');

yargs
    .command({
        command: 'add',
        describe: 'Add a new note',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true, // Makes title a required argument
                type: 'string',
            },
            body: {
                describe: 'Note body',
                demandOption: true, // Makes body a required argument
                type: 'string',
            },
        },
        handler(argv)
        {
            console.log(`Adding note titled "${argv.title}": ${argv.body}`);
            addNote(argv.title, argv.body);
        },
    })
    .command({
        command: 'remove',
        describe: 'Remove a note',
        builder: {
            title: {
                describe: 'Note title to remove',
                demandOption: true,
                type: 'string',
            },
        },
        handler(argv)
        {
            console.log(`Removing note titled "${argv.title}"`);
            removeNote(argv.title);
        },
    })
    .command({
        command: 'list',
        describe: 'List all notes',
        handler()
        {
            console.log('Listing all notes...');
            listNotes();
        },
    })
    .command({
        command: 'read',
        describe: 'Read a specific note',
        builder: {
            title: {
                describe: 'Note title to read',
                demandOption: true,
                type: 'string',
            },
        },
        handler(argv)
        {
            console.log(`Reading note titled "${argv.title}"`);
            readNote(argv.title);
        },
    })
    .help()
    .alias('help', 'h')
    .argv;
