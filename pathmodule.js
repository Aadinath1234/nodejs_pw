const path = require("path");

// console.log(path.sep); // in output \ is given 

// console.log(process.env.PATH); // here is the path given 

// console.log(path.delimiter); //;


const filePath1 = '/public_html/home/index.html';
const currentFilePath = __filename;
console.log(currentFilePath);
console.log( __dirname);




let basename = path.basename(currentFilePath);
console.log("this is the basename : ",basename);

let basenameWithoutExt = path.basename(currentFilePath, '.js');
console.log(basenameWithoutExt);


let dirname = path.dirname(currentFilePath);
console.log('dirname > ', dirname);
console.log('ext1 > ', path.extname(currentFilePath));
console.log('ext2 > ', path.extname('index.md.js'));



let pathToFile = path.format({
    dir: '/public_html/home',
    base: 'index.html'
});
console.log('pathToFile > ', pathToFile);


console.log("this is the current file path : ", currentFilePath);
console.log('IsAbsolute', path.isAbsolute(currentFilePath));
console.log('IsAbsolute', path.isAbsolute('/index.js'));
console.log('IsAbsolute ', path.isAbsolute('./index.js'));
console.log('IsAbsolute ',path.isAbsolute('../index.js'));



let pathToDir = path.join('/home', 'js', 'dist', 'index.js');
console.log('pathToDir > ', pathToDir);
console.log('parse > ', path.parse(currentFilePath));
console.log('relative path > ', path.relative('/home/user/config', '/home/user/js/'));

console.log('resolve > ', path.resolve());
console.log('normalize > ', path.normalize('//home//js//index'));

