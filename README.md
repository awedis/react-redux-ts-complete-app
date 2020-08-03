## React Redux Typescript

#### :trophy: About the app:
  - Complete React Redux Typescript App

#### :heavy_check_mark: Technologies used:
  - ReactJS
  - Redux
    - Thunk: Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed.
    - Saga: Redux Saga is a redux middleware library, that is designed to make handling side effects in your redux app nice and simple. It achieves this by leveraging an ES6 feature called Generators, allowing us to write asynchronous code that looks synchronous, and is very easy to test.
  - Typescript

#### :office: For Database we gonna use json-server:
  - db.json will hold all our data
  - npx json-server -p 4000 db.json

#### :blue_book: Description:
  - Redux:
    - /flag - is simple Redux file
    - /users - uses Thunk
    - /age - uses Saga