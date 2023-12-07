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


const root = ReactDOM.createRoot(document.getElementById("root"));
// here ReactDOM library is used


//root.render(heading);
root.render(parent);
// the render method is responsible for taking the heading object(React element) convert it into a html h1 tag and put it on the root DOM.
// render will put the parent element inside the root element. If anything is already present inside the root tag than it will be REPLACED with whatever is to be render(here parent), it will not be APPENDED.