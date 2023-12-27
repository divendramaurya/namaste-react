import React from "react";
import ReactDOM from 'react-dom/client';

/**   Layout of food Delievery App
 *  Header
 *    Logo
 *    Navigation Items
 *  Body
 *   Search bar
 *   RestuarantContainer
 *      Restuarant cards
 *  Footer
 *    Contact
 *    Address
 *    Copyright
 *    Links
 * 
 * 
*/


{/* 
<div id='parent'>
  <div id='child'>
    <h1> I am h1 tag</h1> 
    <h2> I am h2 tag</h2>  
  </div>
  <div id='child2'>
    <h1> I am h1 tag</h1>
    <h2> I am h2 tag</h2>  
  </div>
</div> 

React.createElement(object)  => HTML (Browser Understandable)
*/}
   

const parent = 
React.createElement("div", { id: 'parent' }, [
  React.createElement("div", { id: 'child' }, [
        React.createElement("h1", {}, 'I am h1 tag'),  //if siblings elements are to be created than need to pass a array of 
        React.createElement("h2", {} ,'I am h2 tag')   //element in 3rd argument (children)
    ]),
    React.createElement("div", { id: 'child2' }, [
        React.createElement("h1", {}, 'I am h1 tag'),  //if siblings elements are to be created than need to pass a array of 
        React.createElement("h2", {} ,'I am h2 tag')   //element in 3rd argument (children)
    ])]); 

console.log(parent);  //object

//JSX will shorten our code.


const heading = React.createElement('h1', { id: 'heading', xyz: 'abc' }, 'Hello World from React from Appjs!!!');
// here React library is used
//console.log(heading); //object  // React.createElement creates a JS object having type, props (attributes, children) 
//React element is basically a JS Object.


// React element using jsx
const element1 = <h1 id="element1" className="heading"> I am heading element1 using jsx </h1>;

// React functional component

const ElementComp1 = () => <h1 id="element1" className="heading"> I am heading element1 functional comp using jsx </h1>;

let num = 20 + 50;
const ElementComp2 = () => (
  <React.Fragment>
    <ElementComp3/>
    <ElementComp1></ElementComp1>
    {ElementComp4()}
    <h2>{num}</h2>
  <h1 
  id="element1" 
  className="heading"> 
  I am heading element2 functional comp using jsx 
  </h1>
  </React.Fragment>
)

const ElementComp3 = () => {
  return (<h1> i am element comp3 functional</h1>)
}

const ElementComp4 = function(){
  return (<h1> i am element comp4 functional</h1>)
}




//const root = ReactDOM.createRoot(document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById("root"));
// here ReactDOM library is used


//root.render(heading);
root.render(<ElementComp2/>);
// the render method is responsible for taking the heading object(React element) convert it into a html h1 tag and put it on the root DOM.
// render will put the parent element inside the root element. If anything is already present inside the root tag than it will be REPLACED with whatever is to be render(here parent), it will not be APPENDED.