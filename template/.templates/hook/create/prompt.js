module.exports = [
    {
        type: 'input',
        name: 'name',
        message: 'Provide new hook name.'
    },
    {
        type: 'confirm',
        name: 'hasTests',
        initial: 'Y',
        message: 'Do you want to generate hook with tests?'
    }
];
