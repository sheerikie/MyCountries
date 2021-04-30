//"version": "1.0.0", //major,minor,patch
//"version": "^1.1.0",//means i dont want you to download a major change but can download minor and patch
//"version": "~1.1.0",//only downloaf when patch change
//joi is used to validate node express input from frontend by creating schemas
//EJS is a simple templating language that lets you generate HTML markup with plain JavaScript. No religiousness about how to organize things. 
//No reinvention of iteration and control-flow. It's just plain JavaScript.

//app.use creates middleware
const modules = require('./modules');
const events = require('events');
const readline = require('readline');// module for creating input prompts
const fs = require('fs');
const zlib = require('zlib');
const http = require('http')
const express = require('express')

const app = express();


// const eventEmmitter = new events();
// const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

// eventEmmitter.on('tutorial', (a, b) => {
//     console.log('event has occured', a + b)
// });

// eventEmmitter.emit('tutorial', 1, 2);


// class Person extends events {
//     constructor(name) {
//         super();
//         this._name = name;

//     }
//     get name() {
//         return this._name;
//     }
// }
// let adrian = new Person('Adrian');
// adrian.on('name', () => {
//     console.log('my name is' + adrian.name)
// })

// let christina = new Person('Christina');
// christina.on('name', () => {
//     console.log(`my name is ${christina.name}`)
// })
// adrian.emit('name')
// christina.emit('name')

// console.log(modules.sum(1, 1));
// console.log(modules.PI);
// console.log(new modules.newObject());

// let num1 = Math.floor((Math.random() * 10 + 1))
// let num2 = Math.floor((Math.random() * 10 + 1))
// let answer = num1 + num2;

// fs.writeFile('example', 'Content of file', (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('File successfully created')
//         fs.readFile('example.txt', 'utf8', (err, file) => {
//             if (err)
//                 console.log(err);
//             else
//                 console.log(file);
//         })
//     }

// // });
// fs.mkdir('MyFolder', (err) => {
//     if (err)
//         console.log(err)
//     else
//         console.log('Directory successfully created')
//     fs.writeFile('./MyFolder/Adriatic', 'is a sea in greece', (err) => {
//         if (err)
//             console.log(err)
//         else
//             console.log('File successfully created')
//     })
//     // fs.rmdir('MyFolder', (err) => {
//     //     if (err)
//     //         console.log(err)
//     //     else
//     //         console.log("Folder successfully deleted")

//     // })
// })
// fs.readdir('MyCountries', (err, files) => {
//     if (err)
//         console.log(err)
//     else
//         console.log(files)
//     files.forEach(file => {
//         fs.unlink('./MyCountries/' + file, (err) => {
//             if (err)
//                 console.log(err)
//             else
//                 console.log('successfully deleted files')
//         })

//     });

//})

// fs.unlink('./MyFolder/Adriatic', (err) => {
//     if (err)
//         console.log(err)
//     else
//         console.log('File successfully deleted')
//     fs.rmdir('MyFolder', (err) => {
//         if (err)
//             console.log(err)
//         else
//             console.log("Folder deleted successfully")
//     })
// })
// fs.rename('example.txt', 'sample.txt', (err) => {
//     if (err) {
//         console.log('There is an error')
//     } else {
//         console.log("Successfully renamed")
//     }
// // })

// fs.appendFile('sample.txt', 'some data being appended', (err) => {
//     if (err)
//         console.log(err)
//     else
//         console.log('data successfully appended')
// })
// fs.unlink('example', (err) => {
//     if (err)
//         console.log(err)
//     else
//         console.log('successfully deleted')
// })

// let read = rl.question(`what is the answer of ${num1} + ${num2} ? \n`, (userInput) => {
//     console.log(userInput)

//     if (userInput.trim() == answer) {
//         rl.close();
//     } else {
//         rl.setPrompt(`Incorrect Response,Try again Later \n`);
//         rl.prompt();

//         rl.on('line', (userInput) => {
//             if (userInput.trim() == answer) {
//                 rl.close();
//             } else {
//                 rl.setPrompt(`Your answer of ${userInput} is incorrect,Try again \n`);
//                 rl.prompt();
//             }
//         });
//     }
// });
// rl.on('close', () => {
//     console.log('Hey you got the correct answer')
// });
//readable streams are more powerful tha fs.readFile because they can stream very large inputs //memory effecient //read data via chunks
// const readStream = fs.createReadStream('sample.gz')
// const writeStream = fs.createWriteStream('uncompressed.txt');
// const gzip = zlib.createGzip()
// const gunzip = zlib.createGunzip()

// //alternatively
// readStream.pipe(gunzip).pipe(writeStream);
// // readStream.on('data', (chunk) => {
// //     console.log(chunk)
// //     writeStream.write(chunk);
// // })

//route params are used when its a must to pass in data whilew query params are used when its optional
app.get('/example/:name/:age', (req, res) => {
    res.send('My properties are' + req.params.name + ':' + req.params.age)
})
// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.write('Hello from node js')
//         res.end()
//     } else {
//         res.write('oops wrong route')
//         res.end()
//     }
// })
// server.listen('3000')
app.listen('3000')