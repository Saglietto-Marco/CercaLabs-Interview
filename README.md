# Coding-Challenge

## Instrucions

    Clone this repo.
    Run the yarn install command in the cloned folder from your bash terminal and then run yarn start. 

## Dependencies
    - axios
    - body-parser
    - if-env
    - express
    - react
## Dev dependencies
    - nodemon
    - concurrently

## Challenge Instructions

Use a node or python framework to serve a react app that has a single page. There should be two forms on this page. 

1) A text input box where you can enter in a string of text. There should be a submit button that when clicked makes an API call back to your server where it reverses the string and sends it back to the frontend and displays the result on the page.

2) A text input box which accepts a URL. There should be a dropdown with options for GET and POST. There should be a submit button. When the submit button is clicked the URL and HTTP method should be sent to the backend where a request is made to the URL using the specified HTTP method. The data recieved back from the URL should be returned as a string to the frontend and displayed there.