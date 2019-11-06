console.log('Starting notes.js')

module.exports.addNote = () => {
    return 'new Note';
}
module.exports.add = (...args) => {
    let addition = 0;
    args.forEach((elm) => {
        if (!isNaN(elm)) addition += elm
    });
    return addition;
}