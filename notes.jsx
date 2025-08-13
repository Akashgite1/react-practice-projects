//! npx create-react-app react_project - old way of creating a react app

import { useCallback } from "react";

// new way of creating a react app
// npx create-vite@latest react_project --template react
// vite is a build tool that is faster than webpack and other tools

//! the browser dont understand react angular vue etc browser only understands html css js so the bulid process is required it converts the code to html css js so the browser can understand it

//^ command to run the app
// npm run start || npm start

// now crate the react app using vite bundler

// why you need hooks in react
//* usestate() is a method hook 
/*
takes a default value and returns an Array with two variables or values
the first is the current state and the second is a function to update that state 
first its defualt value and second is update value or updated state 
let [counter, setCounter] = useState(0); 
counter is intial value which is 0 
setcounter is update value 
if we update the setcountr(setcounter + 1) ||
let count = 10
setCounter(count) this also works fine 
in this the counter variable is update everywhere in the app 
*/

//* virtual DOM 
// react uses virtual DOM to update the UI efficiently 
// virtual DOM is a lightweight copy of the real DOM which is created by browser 
//! react create V_DOM and then compare it with the real DOM and update only the changed parts


//* fiber and reconciliation 
// fiber is the reconciliation algorithm used by react to update the UI efficiently
// we know that react creates virtual dom means a virtual tree same as real dom 
// browser dom is a also a tree structure 
// using fiber algo we just update the changed parts of the tree by comparing the virtual tree with the real tree and change the real tree accordingly 
// this process make the UI update faster and more efficient
//! in fiber algortithm we can 
// 1. pause the rendering of the UI - means pause the work and come back to it later
// 2. assing priority to the work - means assign priority to different types of work
// 3. reuse the work - means reuse previouly completed work
// 4. cancel the work - means cancel the work if its not needed anymore


// -D to install packages in dev dependencies 
// this are the packages that are not needed in production but needed in development phase

//* usedEffect() , useRef() and useCallback() are other hooks in react
// useEffect() is used to perform side effects in the component like fetching data, updating the DOM, etc.
// useRef() is used to create a reference to a DOM element or a value that persists across renders
// useCallback() is used to memoize a function so that it doesn't get recreated on every render
// usecallback make sure every new functioncall is optimized by using the previous function call as much part possible 
// purane function ka jitna bhi part use ho sake utna use karlo next call me 
// passwordgenerator me is we want to add special character with numbers and characters 
// so we can use useCallback to optimize the function so that it doesn't get recreated on every render
// this will help in performance optimization and make the app faster

//useCallback(() => {}, [dependencies]) 
// take two parameters 
// first is the function that we want to memoize and second is the dependencies array 
// dependencies array is used to tell react when to recreate the function
// if the dependencies change then the function will be recreated otherwise it will use the previous function

// useRef() is used to get the reference of any dom element and manupulate it directly
// it returns an object with a current property that holds the reference to the DOM element
// we can use this reference to access the DOM element and manupulate it directly
// for example we can use useRef to get the reference of the input element and select it or copy its value to clipboard