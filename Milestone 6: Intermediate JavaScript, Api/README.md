# Milestone 6: Intermediate JavaScript, API

## Notes

### Module 31: JS Recap and Basic ES6, ES2015

- JScript Core Concepts: 1. Variable, 2. Conditional, 3. Loop, 4. Functions, 5. Array, 6. Object

- Different ways of DOM manipulation and Event handling

- Difference among var, let, const

- Funtions with default parameter

- Template literals (Template strings), String Interpolation,

- Arrow function, different ways of declaring arrow function

- Spread operator

### Module 32: (Advanced) ES6, Class, Inheritance

- Object Destructuring, Array Desctructuring, **Optional Chaining**

- Manipulating array by method _Map_ and _Arrow Function_:
  `numbers.map(x => x * 2)`

- Map array of objects:

  - Use forEach instead Map wwhen we don't need return from the method
  - Example of Map:

  ```js
  const products = [
    { name: "water bottle", price: 50, color: "yellow" },
    { name: "mobile phone", price: 15000, color: "black" },
    { name: "smart watch", price: 3000, color: "black" },
    { name: "sticky note", price: 30, color: "pink" },
    { name: "water glass", price: 3, color: "white" },
  ];

  const productNames = products.map((product) => product.name);

  // [ "water bottle", "mobile phone", "smart watch", "sticky note", "water glass" ]

  const productPrices = products.map((product) => product.price);

  // [ 50, 15000, 3000, 30, 3 ]
  ```

- Implement filter, find on an array of objects

- _Methods_: Map, ForEach, Filter, Find

- **Class**

### Module 33: API, JSON, Data Load, Dynamic Website

- API, JSON, Stringify, Parse

- Simple Fetch:

  ```js
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
  ```

- GET, POST, PATCH, DELETE, CRUD, GET Vs POST, CRUD VS REST API

- Debug API, **Network Tab**, Status Code, Headers, Bad API

- Extracting data from nested API response

## Links

- Sample API

  - Free fake API for testing and prototyping <https://jsonplaceholder.typicode.com/>

  - A free REST API for random Kanye West quotes (Kanye as a Service) <https://kanye.rest/>

  - A free, open-source API for generating random user data. Like Lorem Ipsum, but for people. <https://randomuser.me/>

- HTTPS Status Code <https://developer.mozilla.org/en-US/docs/Web/HTTP/Status>

## Topic Discussed in Module

-

## Things to Explore

-
