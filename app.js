const { createFile } = require('./helpers/multiplicar');
const argv = require('./config/yargs'); 

console.clear();

createFile(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err))

//console.log(argv);
/*console.log(process.argv);
const [ , , arg3 = 'base=5'] = process.argv;
const [ , base = 5] = arg3.split('=');
console.log(arg3);

//const base = 4;

createFile(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err))*/