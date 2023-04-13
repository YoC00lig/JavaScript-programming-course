/* eslint-disable no-undef */
"use strict"

const http = require('node:http');
const { URL } = require('url');
const qs = require('qs'); // funkcja querystring wbudowana 
// w Node.js do parsowania danych POST

function requestListener(request, response) {
  console.log('--------------------------------------');
  console.log(`The relative URL of the current request: ${request.url}`);
  console.log(`Access method: ${request.method}`);
  console.log('--------------------------------------');

  const url = new URL(request.url, `http://${request.headers.host}`);

  if (url.pathname === '/submit' && request.method === 'GET') {
   
    console.log('Creating a response header');
    response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    console.log('Creating a response body');
    response.write(`Hello ${url.searchParams.get('name')}`);
    console.log('Sending the response');
    response.end();
  }

  else if (url.pathname === '/' && request.method === 'GET') {
    console.log('Creating a response header');
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    console.log('Creating a response body');
    response.write(`<form method="GET" action="/submit">
                            <label for="name">Give your name</label>
                            <input name="name">
                            <br>
                            <input type="submit">
                            <input type="reset">
                        </form>`);

    console.log('Sending the response');
    response.end(); 
  } 

  else if (request.method === 'POST') {
    let body = '';
    request.on('data', (elem) => body += elem.toString());
    request.on('end', () => {
      const data = qs.parse(body);
      console.log('Creating a response header');
      response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
      console.log('Creating a response body');
      response.write(`Hello ${data.name}`);
      console.log('Sending the response');
      response.end();
    })
  }

  else {
    console.log('Creating a response header');
    response.writeHead(501, { 'Content-Type': 'text/plain; charset=utf-8' });
    console.log('Creating a response body');
    response.write('Error 501: Not implemented');
    console.log('Sending the response');
    response.end();
  }
}

const server = http.createServer(requestListener);
server.listen(8000);
console.log('The server was started on port 8000');
console.log('To stop the server, press "CTRL + C"');   