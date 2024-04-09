const fs = require('fs');

// console.log('READ START');
// // Asynchronous way to read file 
//  fs.readFile('index.txt', function(err, data){
//        if(err){
//         console.log('Error', err);
//         return err;
//        }
//        console.log('Data: ', data.toString());
//        console.log('READ END');
//        return data;
//  });
// console.log('OTHER STUFF');








//SYNCHRONOUS WAY TO READ FILE 
// var data = fs.readFileSync('index.txt');
// console.log('Data: ', data.toString());
// console.log('READ END');
// console.log('OTHER STUFF');










// to read file first open file then reading the file .
// Read > open + read
const buf = new Buffer(1024);

fs.open('index.txt', 'r+', function(err, fd){
      if(err){
        console.log('Error in opening file: ',err )
      }
      console.log('File open successfully');

      fs.read(fd, buf, 0, buf.length, 0, function(er, byte){
          if(er){
            console.log('Error in reading file')
          }
          console.log('Data: ', byte);
          console.log('Data: ', buf.slice(0,byte).toString())
      })
})








//writing file : this overwrite the content of the file: 
fs.writeFile('index.txt', 'PW Skills', function(err){
     if(err){
         console.log('Error in writing file!');
     }
     else{
        console.log('Success in writing file ');
     }
});









//appending file : 
fs.appendFile('index.txt', '---i am appending file here ','utf8', function(err){
    if(err){
         console.log('Error in appending file! ');
    }
    else{
        console.log('Success in appending file! ');
     }
 });









//closing file: 
const buf = new Buffer(1024);
fs.open('index.txt', 'r+', function(err,fd){
     if(err){
        console.log('ERRor in opening file: ', err);
     }
     console.log('file open successfully!');

     fs.read(fd, buf, 0, buf.length, 0, function(er,bytes){
         if(er){
            console.log("ERror in reading file")
         }
         console.log('Data: ', bytes);
         console.log('Data: ', buf.slice(0, bytes).toString());
         fs.close(fd, function(err){
             if(err){
                console.log('Error in closing file');
             }else{
                 console.log('success in closing file ');
             }
         })
     })
})









//Deleting file: 
fs.unlink('index.txt', function(err){
     if(err){
         console.log('Error in deleting file');
     }
     else{
        console.log('success in deleting files');
     }


})