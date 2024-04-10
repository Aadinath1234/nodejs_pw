// const http = require('http');

// const PORT = 3021;
// const HOSTNAME = 'localhost';

// const server = http.createServer((req, res) => {
//      res.statusCode = 200;
//      res.setHeader('Content-Type', 'text/plain');
//      res.end('NOde server created by aadinath');
// });


// server.listen(PORT, ()=> {
//      console.log(`Server running at ${HOSTNAME}:${PORT}`);
// })









//server error 
// const http = require('http');
// const PORT = 3022;
// const HOSTNAME ='localhost';

// const server = http.createServer((req, res)=>{
//       res.statusCode = 500;
//       res.setHeader('Content-Type','application/json');
//       res.end(JSON.stringify({error: "server Error"}));
// });


// server.listen(PORT, ()=> {
//       console.log(`server running at ${HOSTNAME}: ${PORT}`);
// });









//with multiple pages : 
// const http = require('http');
// const PORT = 3024;
// const HOSTNAME ='localhost';

// const server = http.createServer((req, res)=>{
//         if(req.url == '/'){
//              res.statusCode = 200;
//              res.setHeader('Content-Type', 'text/plain');
//              res.end('Welcome to nodejs server by aadinath ');

//         }  
//         else if(req.url == '/about'){
//               res.statusCode = 200;
//               res.setHeader('Content-Type', 'text/plain');
//               res.end('About page ');
//         }
//         else if(req.url == '/contact'){
//                res.statusCode = 200;
//                res.setHeader('Content-Type', 'text/plain');
//                res.end('Contact page ')
//         } else if(req.url == '/product'){
//             res.statusCode = 200;
//             res.setHeader('Content-Type', 'application/json');
//             res.end(JSON.stringify({ productName: 'product 1 '}));
//         }
//         else {
//               res.statusCode =  500;
//               res.setHeader('Content-Type', 'text/plain');
//               res.end('Server Error');
//         }




// });


// server.listen(PORT, ()=> {
//       console.log(`server running at ${HOSTNAME}: ${PORT}`);
// });













// bringing data from another site (like api );
const http = require('http');
const PORT = 3024;
const HOSTNAME = 'localhost';

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Welcome to nodejs server by aadinath ');

    }
    else if (req.url == '/about') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('About page ');
    }
    else if (req.url == '/contact') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Contact page ')
    } else if (req.url == '/product') {
        const options = {
            hostname: 'fakestoreapi.com',
            path: '/products/1',
            method: 'GET'
        }

        const apiReq = http.request(options, (apiRes) => {
            apiRes.on("data", (data) => {
                res.statusCode = 200;
                res.setHeader ('Content-Type', 'application/json');
                res.end(data.toString());
            })
        });

        apiReq.on("error ", () => {
            console.log(e);
        })

        apiReq.end();









        
    }
    else {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Server Error');
    }




});


server.listen(PORT, () => {
    console.log(`server running at ${HOSTNAME}: ${PORT}`);
});







