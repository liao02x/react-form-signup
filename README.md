# Take home assignment for Placer.ai

## Overview
This project is a show case of a sign up form made with React context. With the help of the React context, the Form can take various type of fields dynamicly, and it's with basic styling.

The auth token from the API is stored in the local storage. Another way to store it is to use some global state management library like Redux. I didn't do it just to simplify things.

The form is using the html5 required and pattern to validate the input instead of having a schema validator just to keep things simple.

## How to run
1. `pnpm install` to install all the dependencies
2. `pnpm dev` to start the project
3. Open `http://localhost:5173` in the browser