const notes = require('./notes');
const yargs = require('yargs');
const argv = yargs.argv;






const command = argv._[0];
if (command === 'add') {
    const note = notes.addNotes(argv.title, argv.body);
    if (note) {
        console.log('Note created');
        console.log('===================');
        console.log(`Title: ${note.title}`)
        console.log(`Body: ${note.body}`)
    } else console.log('Note\'s title already added before');
} else if (command === 'list') {
    const allNotes = notes.listNotes();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach(note => {
        console.log(`Note title: ${note.title}`);
        console.log('===================');
        console.log(`Body: ${note.body}`)   
    });
} else if (command === 'read') {
    const note = notes.readNote(argv.title);
    if(note) {
        console.log(`Note title: ${note.title}`);
        console.log('===================');
        console.log(`Body: ${note.body}`)        
    } else {
        console.log(`this note is doesn't exitst`);
        
    }
} else if (command === 'remove') {
    const isRemoved = notes.removeNote(argv.title);
    if (isRemoved) {
        console.log(`Note "${argv.title}" is removed`);
    } else {
        console.log('this note isn\'t added before');
    }
} else {
    console.log('command is not recognize');
}
