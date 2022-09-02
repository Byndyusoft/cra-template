module.exports = [
    {
        type: 'input',
        name: 'name',
        message: 'Provide new Feature name.'
    },
    {
        type: 'confirm',
        name: 'hasRouter',
        initial: 'Y',
        message: 'Do you want to generate Feature with router?'
    },
];
