"use strict"
// const http = require('node:http');
// const { URL } = require('node:url');
import http from 'node:http';
import { URL } from 'node:url';
/**
     * Handles incoming requests.
     *
     * @param {IncomingMessage} request - Input stream — contains data received from the browser, e.g,. encoded contents of HTML form fields.
     * @param {ServerResponse} response - Output stream — put in it data that you want to send back to the browser.
     * The answer sent by this stream must consist of two parts: the header and the body.
     * <ul>
     *  <li>The header contains, among others, information about the type (MIME) of data contained in the body.
     *  <li>The body contains the correct data, e.g. a form definition.
     * </ul>
     * @author Stanisław Polak <polak@agh.edu.pl>
*/
function requestListener(request, response) {
  console.log('--------------------------------------');
  console.log(`The relative URL of the current request: ${request.url}`);
  console.log(`Access method: ${request.method}`);
  console.log('--------------------------------------');
  // Create the URL object
  const url = new URL(request.url, `http://${request.headers.host}`);
  /* ******** */
  /* "Routes" */
  /* ******** */
  /* ---------------------- */
  /* Route "GET('/submit')" */
  /* ---------------------- */
  if (url.pathname === '/submit' && request.method === 'GET') {
    // Processing the form content, if the relative URL is '/submit', and the GET method was used to send data to the server'
    /* ************************************************** */
    console.log('Creating a response header');
    // Creating an answer header — we inform the browser that the body of the answer will be plain text
    response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    /* ************************************************** */
    console.log('Creating a response body');
    // Place given data (here: 'Hello <name>') in the body of the answer
    response.write(`Hello ${url.searchParams.get('name')}`); // "url.searchParams.get('name')" contains the contents of the field (form) named 'name'
    /* ************************************************** */
    console.log('Sending the response');
    response.end(); // The end of the response — send it to the browser
  }
  /* ---------------- */
  /* Route "GET('/')" */
  /* ---------------- */
  else if (url.pathname === '/' && request.method === 'GET') {
    // Generating the form if the relative URL is '/', and the GET method was used to send data to the server'
    /* ************************************************** */
    console.log('Creating a response header');
    // Creating a response header — we inform the browser that the body of the response will be HTML text
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    /* ************************************************** */
    console.log('Creating a response body');
    // and now we put an HTML form in the body of the answer
    response.write(`<form method="GET" action="/submit">
                            <label for="name">Give your name</label>
                            <input name="name">
                            <br>
                            <input type="submit">
                            <input type="reset">
                        </form>`);
    /* ************************************************** */
    console.log('Sending the response');
    response.end(); // The end of the response — send it to the browser
  }
  /* -------------------------- */
  /* If no route is implemented */
  /* -------------------------- */
  else {
    /* ************************************************** */
    console.log('Creating a response header');
    response.writeHead(501, { 'Content-Type': 'text/plain; charset=utf-8' });
    /* ************************************************** */
    console.log('Creating a response body');
    response.write('Error 501: Not implemented');
    /* ************************************************** */
    console.log('Sending the response');
    response.end();
  }
}
/* ************************************************** */
/* Main block
/* ************************************************** */
const server = http.createServer(requestListener); // The 'requestListener' function is defined above
server.listen(8000);
console.log('The server was started on port 8000');
console.log('To stop the server, press "CTRL + C"');    <br></br>