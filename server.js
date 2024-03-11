const http = require('node:http'); // import thư viện
const hostname = '127.0.0.1'; // localhost
const port = 3030; // cổng chạy server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    console.log('Vào host server')
    // server xử lý dữ liệu rồi trả data kèm html về cho client
    res.write('<h1>Bài 1 - NodeJS</h1>')
    res.write(`
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>

            <style>
                h1 {
                    color: red;
                }
                h2 {
                    color: black;
                }
                h3{
                    color: cyan;
                }
            </style>
            
        </head>
        <body>
            <h1>HTML5 - Nội dung 1</h1>
            <h2>HTML5 - Nội dung 2</h2>
            <h3>HTML5 - Nội dung 3</h3>
        </body>
        </html>`)
    res.end();
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});