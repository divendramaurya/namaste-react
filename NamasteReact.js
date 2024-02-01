/*
git url::
https://github.com/divendramaurya/namaste-react

--Git
-- git init => To make a particular repo as git respository hit
-- git branch -M main => To create a main as a main branch  
-- npm init => karne se package.json file banate hai.
-- npm install packagename  => isse package-lock.json banta hai
-- npm install karne se hum node_modules generate kar sakte hai package.json ki help se.  
-- npm install -D parcel => (-D is done to install it only for dev phase/environment)
-- npx parcel index.html => our files will be hosted on server with port 1234  (http://localhost:1234)   
   i.e the things that is available in browser at file:///C:/Users/E133538/Downloads/React/namaste_react/index.html  will be now available at server http://localhost:1234
-- npm install parcel ==> npm installs tha package
-- npx parcel index.html ==> npx executes the package  => on running this command parcel goes to source(index.html) and build a development build for our app. And hosts that development build on server (localhost:1234).   
  Create dist folder and  .parcel-cache folder.
  It generates a development/production build of the project inside the dist folders and host it on server with port 1234
-- npx parcel build index.html => creates a production build.  
-- npx parcel index.html => creates a development build.  
-- npm => installs packages, npx => executes packages

_____________________________________________________________________________________________________________

--README.md is a markup file.

_____________________________________________________________________________________________________________
:::
html:5  : Emmet shortcut to create dummy html pag.
to comment : Ctrl + K + C.
Indenation : Ctrl + K, Ctrl + F     , Ctrl + ]

_____________________________________________________________________________________________________________
cdn:::
cdn => content delivery networks is place, where react library has been hosted. we can pull react from there into our project.
A content delivery network (CDN) is a geographically distributed group of servers that caches content close to end users. A CDN allows for the quick transfer of assets needed for loading Internet content, including HTML pages, JavaScript files, stylesheets, images, and videos.
The popularity of CDN services continues to grow, and today the majority of web traffic is served through CDNs, including traffic from major sites like Facebook, Netflix, and Amazon.

_________________________________
crossorigin:::
The crossorigin attribute sets the mode of the request to an HTTP CORS Request. Web pages often make requests to load resources on other servers. Here is where CORS comes in. A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain
crossorigin :  The crossorigin content attribute on media elements is a CORS settings attribute.
cors , mai same same origin policy by default... so can request data only from own url/domain   foo.com => foo.com
--When a browser makes a request it adds  a origin header to the request,If the request goes to the server on the same origin then the request is allowed.
--If the request goes to the different URL then It is called as cross origin request. While sending the response the server will add the Access-Control-Allow-Origin header    foo.com => bar.com
--CORS is a relaxation of the same-origin policy implemented in modern browsers. Without features like CORS, websites are restricted to accessing resources from the same origin through what is known as same-origin policy.

_____________________________________________________________________________________________________________
Should I put JavaScript in head or body?:::
For scripts that are critical to the page contents and should be loaded first such as analytics, API, or authentication-type of scripts, it is recommended to place them in the head section of the HTML page. And other script tags should be placed at the bottom of the page before the closing </body> tag.
Placing scripts at the bottom of the <body> element improves the display speed, because script interpretation slows down the display.

_____________________________________________________________________________________________________________
Difference between react.development.js and react.production.min.js?
--In production mode, compression and minification of Javascript and other resources happens to reduce size of the code which is not the case when it comes to development mode. Performance will be much faster in production mode when compared to development mode.
--The production link is meant for deploying your application in a production environment. It excludes development-specific tools, warnings, and error messages. It is smaller in file size, which improves the performance of your application. It is optimized for production.

_____________________________________________________________________________________________________________
-- React is a library, it can also be applied even to a small portion of the page. React only works in the page whatever you make the root as, keeping other html things remains unchanged.
-- React can work independently in a small portion of application. Its a library and not a framework.
-- React is a bare bone minimal js library.
-- React just gives us some helper methods to develop application faster.

_____________________________________________________________________________________________________________
--Before moving our code to production we need to do bundling, code splitting, chunking, image optimization, remove comments, minify the code, compress.

-- When we do create-react-app, it creates a scafold(platform) for us, It gives a basic react application, which is already production ready.

--npm =>  manages node packages, (its fullform is not node package manager). 
npm is a standard respository for all the packages. It is one of the biggest package manager. Any package we need to include in our project, we can use npm. All the packages, libraries, utilities are hosted over their.
-- npm will manage all the package we will install in our system.

-- Those packages on which our project is dependent on, are call as dependency. Npm manages them.

-- create-react-app behind the scenes uses webpack bundler.

-- webpack, parcel, vite are some module bundler.

--Webpack in react is a JavaScript module bundler that is commonly used with React to bundle and manage dependencies. It takes all of the individual JavaScript files and other assets in a project, such as images and CSS, and combines them into a single bundle that can be loaded by the browser.
  minifies, cached, compresses, cleaned  => bundler does this things.
_____________________________________________________________________________________________________________
-- There are 2 type of dependencies dev and normal, Dev dependencies are used only during the development phase, while the normal dependencies are used in dev as well as production environment.  
eg: npm install -D parcel             => (-D is done to install it only for dev phase/environment)

_____________________________________________________________________________________________________________
::Difference between ~(tilde) and ^(carat) in package.json
will update automatically to the future versions
Eg: "parcel" : "^2.8.3"     => major.minor.patch
 ~version “Approximately equivalent to version”, will update you to all future patch versions, without incrementing the minor version. ~1.2.3 will use releases from 1.2.3 to <1.3.0.

 ^version “Compatible with version”, will update you to all future minor/patch versions, without incrementing the major version. ^1.2.3 will use releases from 1.2.3 to <2.0.0.

_____________________________________________________________________________________________________________
--package.json is a configuration file for  npm. It keeps a track of what version of that packages that is installed in our system.

--package-lock.json keeps the track of all the exact versions of all the dependencies.(It don't have ~ or ^ in versions unlike package.json because it tracks exact version.)


--package-lock.json ==> in integrity key => keeps a hash to verify that my local machine version matches with the version deployed on production.
_____________________________________________________________________________________________________________
--node-modules contains the actual data of the package dependencies we have installed. Node modules fetches all the code of  all the dependencies we are using into our system.
_____________________________________________________________________________________________________________
-- Our Project is dependent on parcel. parcel can be dependent on some other dependency, that dependency may be dependent on some other dependencies and so on ... This is called as transitive dependency.
_____________________________________________________________________________________________________________
--package.json and package-lock.json both should be put in githut repo. Node modules can be regenerated from node_modules.

-- .gitignore  => If we want some files to not go on Production or on github, we can provide its entry in .gitignore file.
 like /node_modules
_____________________________________________________________________________________________________________
-- We can use a package in our project through 2 ways:
   1. using cdn links through scripts
   2. npm install packagename. (will be available through node_modules)
  But via npm is a better method because:
   1. If we fetch from cdn , it will make a network call to respective url (eg: https://unpkg.com/react@18/umd/react.development.js). Hence making extra network call. 
   2. If version changes, we will need to keep changing the version in script file. But if we maintain it locally in our file through package.json, we can easily update the dependencies version.

-- <script type="module" src="./App.js"> </script>
   If we write type='module', it will consider App.js as a module and not as normal browser script.
_____________________________________________________________________________________________________________
--# Things Parcel:: do: (https://parceljs.org/)
- Dev Build
- Creates Local server
- HMR - Hot module Replacement (Automatically update the browser when file is saved)
- It has File Watching Algorithm (written in C++)(used in HRM)
- Caching - Faster Builds (have .parcel-cache file)
- Image Optimization
- Minification of the files.
- Bundling
- Comressing the files
- Consistent Hashing
- Code splitting
- Differential Bundling -(support older browsers by transpiling modern javascript to es5). Loading the modern javascript and transpiled es5 code to modern browsers and the rest of the browsers respectively. Provides different bundles for different types of older browsers.
- Does Diagnostics of the App.
- Good Error handling (Gives better error suggestions for the errors we get in console.)
- HTTPs (can host our apps on https (ssl) also).
- Tree shaking => Removes unused Code. Parcel supports tree-shaking both ES modules and CommonJS out of the box! It statically analyzes the imports and exports of each module, and removes everything that isn't used.
- Creates different Dev and Production bundles.(more optimization in production).

_____________________________________________________________________________________________________________
-- When we do npx create-react-app it already have a bundler inside it.

-- With the help of parcel, babel, browserlist we have created our own create-react-app.
_____________________________________________________________________________________________________________
-- browserslist =>   https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z => Makes apps works for the older version of browsers.  The config to share target browsers and Node.js versions between different front-end tools.
  "browserslist" : [
    "Last 2 Chrome versions",
    "Last 2 Firefox versions"
  ]
_____________________________________________________________________________________________________________

-- In the package.json in scripts object we can provide short commands.
 "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html" 
    "test": "jest"
  },
so instead of hitting "npx parcel index.html" we can do => "npm run start" or just => npm start  (for dev)
 and for npm parcel build parcel.html  => npm run build (for production)
_____________________________________________________________________________________________________________
--Compiling vs Transpiling vs Polyfilling
--Compiler: is an umbrella term to describe a program that takes source code written in one language and produce a (or many) output file in some other language. In practice we mostly use this term to describe a compiler such as gcc (GNU Compiler Collection) which takes in C code as input and produces a binary executable (machine code) as output.

__________________________
--Transpilers are also known as source-to-source compilers. So in essence they are a subset of compilers which take in a source code file and convert it to another source code file in some other language or a different version of the same language. The ouput is generally understandable by a human. This output still has to go through a compiler or interpreter to be able to run on the machine.

https://babeljs.io/
Babel is a JavaScript compiler.(Transpilers) node library/ npm package.
input => const hello = <h1>hellow</h1>
output=> React.createElement("h1", {}, 'hellow');
__________________________
----Polyfilling
It Provides an equivalent piece of code to give modern functionality on older browsers that do not natively support it.
For example, consider the following utility: Number.isNaN.

ES6 defines this utility to provide a better check than the original for NaN values. Still, if your browser does not support it (rare nowadays), you can easily create a polyfill for this utility and start using it regardless of whether your browser supports it or not.
*/
if (!Number.isNan){
Number.isNaN = function isNaN(n){
   return n!== n; 
  }
};
/*
The if (!Number.isNan) check guards against applying the polyfill in browsers that support natively it.

The problem with polyfills is that not all features are polyfillable, and you should be very careful implementing them because if your polyfill does not adhere precisely to the specification, all of your code that uses your polyfill will be incorrect.

When you can’t polyfill a feature, you have to transpile it.
_____________________________________________________________________________________________________________
-- JSX is not a part of React, jsx is separate and react is separate.
React can also be written without jsx.

____________________________
--
JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file. Although there are other ways to write components, most React developers prefer the conciseness of JSX, and most codebases use it.

____________________________
--
JSX: Putting markup into JavaScript 
The Web has been built on HTML, CSS, and JavaScript. For many years, web developers kept content in HTML, design in CSS, and logic in JavaScript—often in separate files! Content was marked up inside HTML while the page’s logic lived separately in JavaScript.
But as the Web became more interactive, logic increasingly determined content. JavaScript was in charge of the HTML! This is why in React, rendering logic and markup live together in the same place — "components".

____________________________
-- JSX is just a syntax.
JSX is not html inside javascript. But its html like or xml like syntax in javascript file.

____________________________
-- The jsx we write is transpiled by the parcel/webpack before it goes to js engine of the browsers.
The browsers(js engine) cannot understand jsx, they can only under js. Hence jsx is transpiled to js by parcel with the help of babel. Babel is a Transpilers.

when we installed parcel... parcel automatically installed babel ... transitive dependency.

<h1>Tag1</h1>    (JSX) 
 =>  is transpiled to JS with help of Babel
React.createElement("h1", {}, 'Tag1');
=> It gives a JS object
This JS object is converted to HTML tags and rendered to root DOM by render() function.  

In jsx tha attributes are camelCase:
const jsxHeading = <h1 id='root' className='root' tabIndex = '1'>normal h1 jsx tag</h1>;
we use className in jsx and not class.
The above look with look like this in browser.
<h1 id="root" class="root" tabindex="1">normal h1 jsx tag</h1>
*/
____________________________
//React Element   // are written in lowercase.
//When we write multi like jsx we need to wrap jsx inside parenthesis ()
//eg :
 const jsxHeading = (<h1 id='root' 
                            className='root' 
                            tabIndex = '1'>
                            normal h1 jsx tag
                        </h1>);
//() is needed by babel to understand where the jsx syntax starts and where it ends.

//For single line jsx, no need to wrap inside ()
_____________________________________________________________________________________________________________
/*
--In React, 
An element => is the smallest building block 
while the component =>  is a reusable piece of the code.
The element contains the information to be rendered on the UI 
and the Components are composed of the elements.


-- React Components 
   Everything in React is a components.
     We can create components in 2 ways in React.
     1. Class based components (old)
     2. Functional components (new)

Functional components is normal js function which returns a piece of JSX code (JSX /React element or bunch of elements).

Any React components should be start with capital letter or will get an error.
eg:   
*/     function App() { //...
          } 
          const Myfucntion = () => { //...
          }
           class Helloworld { //...
          }   

____________________________
//in JS
        const func1 = () => {
          return "xyz"
        }

        //is same as

        const func2 = () => "xyz"  // shorthand syntax

        //is same as 

        function func3() {
          return "xyz"
        }
//-----------
//in React
      const HeadingComponent = () => {
        return <h1 className='heading'>This is a functional component</h1>
      }

      const HeadingComponent2 = () => <h1 className='heading'>This is a functional component</h1>   // shorthand
      
      const HeadingComponent3 = () => (
        <h1 className='heading'>This is a functional component</h1>  
      )

      const HeadingComponent4 = () => (
          <div id='container'>
            <h1 className='heading'> i am react h1 tag</h1>
          </div>
      )

      const HeadingComponent4 = () => (
        <div id='container'>
          <HeadingComponent/>      // component inside component is called component composition. Composing 2 components in one another.
        <h1 className='heading'> i am react HeadingComponent4 tag</h1>
       </div>
      )

      const HeadingComp = function(){
         return ( <h1 className='HeadingComp'>i am HeadingComp</h1>);
      }


      let num = 100;
      const jsxHeading = <h1 id='root' className='rootClass' tabIndex = '1'>normal h1 jsx tag</h1>;

      const HeadingComponent4 = () => (
        <div id='container'>
          <h2>{num}</h2>
          <h2>{jsxHeading}</h2>
          <HeadingComp/>                    // Can write like this<HeadingComp/> or <HeadingComp></HeadingComp>  or  {HeadingComp()}
          <HeadingComp></HeadingComp>
          {HeadingComp()}
        <h1 className='heading'> i am react HeadingComponent4 tag</h1>
       </div>
   )  // we can write js/react element in react component inside {} and vice versa.


_____________________________________________________________________________________________________________
//-- React prevents cross-site scripting by sanitizing the data that is coming inside {} and then will execute/pass it.

_____________________________________________________________________________________________________________
_____________________________________________________________________________________________________________

/**   Layout of food Delievery App
 *  Header
 *    Logo
 *    Navigation Items
 *  Body
 *   Search bar
 *   RestaurantContainer
 *      Restaurant cards
 *  Footer
 *    Contact
 *    Address
 *    Copyright
 *    Links
 * 
 * 
*/

// when we write inline css then css should be provided as object inside {}  // Its not the preferred way to write code.

const styleCard = {
  backgroundColor: "#f0f0f0"
}

const RestaurantCard = () => {
  return (
      <div className="res-card" style = {styleCard}>
          <div className="xyz" style = {{backgroundColor: pink}}>   /**can give css object inside {}*/ 
              <h3>Meghna foods</h3>
          </div>
      </div>
  )
}

//Padding is used to create space within an element, while margin is used to create space between elements.

// Passing a props to a component in React is like passing an argument to js function.
// When we have to dynamically pass some data to a component we pass it as a props. All the properties we need to provide is wrapped in a object and passed as props to the component. Props is a object.


//System Design Question// Config Driven UI -> swiggy , zomata have  --> 
//controlling the ui using the config data -> this config data comes form backend.
// UI layer and Data layer both together builds up a frontend application.


Array.join()

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(''));
// Expected output: "FireAirWater"

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"

console.log(elements.join(', '));
// Expected output: "Fire, Air, Water"

//-----------------------------------------------------------------------------------------
// Always give key attribute when looping through map . It helps react to identify the childs uniquely.

// Never use index as a key. Index as a key is anti-pattern. Use index as a key as a last resort. Use index as key only when unique key is not present.

// not using key(not acceptable) <<<<<<< index as as key  <<<<<< unique key

//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------
//- 2 types of exports:

//-Default import/export:
  export default Component;
  import Component from 'path';

//Named import/export:
// When one have to export multiple things then use named export;
  export const Component;
  import { Component } from 'path';
import { useEffect } from 'react';

//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------
//Whenever a state variable updates React Re- renders the Component.

// React Hooks:
// It is a normal js utility function.
// useState gives  us powerful state variables.
// React keeps our UI in sync with the data layer(local state variable).
// As soon as the data layer updates the UI layer updates. By re-rendering the component.
// React makes DOM operations superfast and efficient.

// React is fast because it does efficient DOM manipulation. Because it uses a virtual DOM.

// Reconciliation Algorithm (React Fiber) => came in React 16.0
// Algorithm to update the DOM.
// https://github.com/acdlite/react-fiber-architecture

// Virtual Dom is a kind of Object representation of the Actual DOM. Its a normal js Object.
// The javascript Object representation of the HTML code/tags is called as virtual DOM.
// Virtual DOM has existed way long back in software Engg. React took that and build its code over that virtual DOM. So virtual DOM got popular after React used it.
// Eg: console.log(<Body/>);
// As soon we call the Eg :setListOfRestaurants(filteredList); React will find out the diff and update the UI by re-rendering the component.
  const [listOfRestaurants,setListOfRestaurants ] = useState(resList);
// whever you call the second function "setListOfRestaurants(res)", React will automatically re-render your component.

// All the UI we seen on screen, React keeps a track of HTML tags/Dom nodes, in the form of virtual DOM (kind of object virtual represenation of the whole real DOM).
// So react basically finds out the difference between the new object and the old object. React doesn't touch the HTML a lot.
 
// Diff Algorithm
// Finds out the difference between 2 virtual DOMS  => updated virtual dom and previous virtual dom.
// Its like a "git diff" between new object and old object, once it finds out the difference between this  objects, then it will update the actual real DOM. Making React faster.
// Finding out the difference between 2 HTML codes is tough , while finding out the difference between 2 js Objects is fast.

//Incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.


//useState gives use a array. 
//array[0] gives a variable and array[1] gives us a set function to update that variable.
const [listOfRestaurants,setListOfRestaurants ] = useState(resList);  // destructured on the fly.
  //OR

const arr =  useState(resList);
const [listOfRestaurants,setListOfRestaurants ] = arr;
  //OR

const arr =  useState(resList);
const listOfRestaurants = arr[0];
const setListOfRestaurants = arr[1];

//============================================================================================
// # Monolith architecture.
 // API, UI(JSP pages), AUth, DB connections, Notifications  ==> All is written in single Project.
 // Even if single change(eg, button color changed) was required to be done, needed to build, compile, deploy the whole project.
 // In Monolith architecture frontend, backend teams  all need to work on the same the respository.
 // Need to have same Tech stack for the whole application. If application is written in java then whole thing (UI, backend, DB, notification) need to be written in java only.


 // # Microservice Arhitecture.
 // Have different service for different jobs.
 // Backend service , UI service, Ath service, DB conn service, sms email notification service  ==> All this microservices are combined together to form a big app.
 // All this microservices talk to each other depending upon the use cases.
 // Have separate backend project, separate UI project, separte Db connections project. For every small things we have a different project. This is known as "Separation of concern". And "Single responsibility principle".
 // Here each as every service has its own job. No interference in others jobs.
 // In Microservices architecture all teams work on there own independent service/project. Backend team will only maintain there backend project. They have there own deployment cycle and everything is separate.
 // Unlike Monolith architecture, here we Can have different tech stack for different things. Can write UI in next or react, DB connections in phyton, Backend in java, sms service in Go Lang. Can write microservices in any language we want to depending upon usecase. Here one service can be in react while the other can be in vue js.
 
 // Here all services run on different ports.
 // Eg. UI service can run on port http://localhost:1234/ while 
  //  Backend service can run on http://localhost:1000/
  //  SMS service can run on http://localhost:3000/ 
  //  On different ports we can deploy different services.
 // Then all this ports can be mapped to different domain name. 
 // Eg, backend can mapped to /api like.  https//:www.namastereact.com/api .And all the backend apis are deploy on the same url.
 // Similarly can deploy sms service on https//:www.namastereact.com/sms. To send the sms we just need to call the service /sms
 // Similarly can deploy UI on just / eg:  https//:www.namastereact.com/  => i.e as soon as you hit main domain https//:www.namastereact.com you will be redirected to http://localhost:1234/
 // Here if UI wants to connect to backend. It connect by just calling /api. or will call respn port  :1000/
 // Similarly backend can connect to sms services by just calling  /sms or port :3000/
 // Like this, this all services are connected and interact with each other.
 //============================================================================================

// We can make a call to api in 2 ways from our UI.
 // #1 :: As soon as the page loads ==> call the api (500ms) ==> once the data from api comes ==>  Render the UI page with the filled data.

 // #2 :: As soon as the page loads ==> Render the page with back bone minimum/ skeletion we have  ==> then make the api call ==> once data comes from the api ==> re-render the page again..

 //The second approach is better one because it provides a better UX. In React we use second approach, even though we are making an extra render in UI. The re renders in react in faster. Hence provide better user experience. 


  //============================================================================================
  //============================================================================================
   // # useEffect is a normal js function.
   // It takes 2 arguments 1st a callback function(arrow function) and 2nd is dependency array.
   // The callback function in the useEffect will be called after your component renders.
   

   // fetch()  function is given to us by the browser's js engine. fetch will fetch data from the API.

   // When we call swiggy api from localhost, we get cors error from browser(here chrome is blocking us from calling swiggy api form localhost) i.e one origin to another origin. If there is a origin mismatch the browsers blocks that api call. This is CORS policy.

   //Shimmer UI: A Better Way to Show Loading States
//If you have ever used a web or mobile app that takes some time to load data from a server, you might have seen a loading spinner or a progress bar that indicates that something is happening. While these are common ways to show loading states, they are not very engaging or informative for the user. They don’t tell the user what kind of content is being loaded, how long it will take, or what to expect next.

//A better way to show loading states is to use a shimmer UI. A shimmer UI is a version of the UI that doesn’t contain actual content, but instead mimics the layout and shapes of the content that will eventually appear. It uses a gradient animation that creates a shimmering effect over the placeholders, giving the user a sense of motion and progress.

// #### React Hooks - using useState vs just variables
//The reason is if you useState it re-renders the view. Variables by themselves only change bits in memory and the state of your app can get out of sync with the view.
//Agar hum normal js variable ki value change karenge tho wo change ho jayega, lekin ui mai update nhi hoga, kyuki ui re-render hi nhi hoga. because react doesn’t keep track of local js variables.
// let btnName = "login";   
// onClick = {() => {
//   btnName = "logout";
//   console.log(btnName);
// }};
//Agar hum useState ke state variable se banaye tho variable to update hoga hi saath mai ui bhi update hoga, because corresponding ui component rerender ho jayegi. React triggers the Reconciliation cycle.

//React requires state variables as it does not keep track of local variables, so when you attempt to modify them, React does not re-render the DOM. In React, state is a JavaScript object that stores data that can be modified over time.

//Eg: Agar ek header component ke andar sirf ek button ki value change hogi. tho khali wo button nhi update hoga, balki pura header component re-render(Header function call) ho jayega.(Lekin change sirf button ki jagah hi dikega UI mai)
//Then it will find the diff between the older version and newer version of the header component Object tree in virtual dom. It will see in that diff only the button is getting updated. SO only this button changes will be pushed to real dom. This is Reconciliation process.


    const [btnName, setBtnName] = useState("login");
    setBtnName("logout");

    //Jab hum aisa kar rhe hai, tho const btnName ki value update nhi ho rha, balki ek new instance of btnName(new btnName variable create kar rhe hai) har ek re-render pe create kiya jata hai.
    //btnName is a new variable than it was before.

// Whenever the state variable updates, React triggers Reconciliation cycle(re-renders the component);

// React fiber is new Reconciliation process to efficiently manipulate the DOM.


 //============================================================================================
 // Free CORS Proxy Servers
// 1. CorsProxy.io
// CorsProxy.io offers a free and convenient proxy to solve CORS errors. All you need to do to use the service is to insert the proxy URL https://corsproxy.io/ as a prefix before the destination URL, and it will call the URL on behalf of your application using the proper CORS headers. Here is some JavaScript code to implement it.
// Cors proxy is handling cors issue.
// const url = 'https://corsproxy.io/?' + encodeURIComponent('https://api.domain.com/...');

 //============================================================================================
 useEffect(() => {}, []);
 //callback function is mandatory while list of dependencies arrays is not mandatory.
 //If we dont put dependency array, useEffect will be called everytime my component renders.

 // If no dependency array ==> useEffect will be called after every render. 
 // If empty dependency array ==> useEffect will be called only on initial render(just once).
 // If we provide dependency array eg. [btnName] ==> useEffect will be called everytime only when btnName updates.

//================================================================================================
    const [btnName, setBtnName] = useState("login");

// Never create useState variable outside of the component.
// UseState is used to create local state variables inside the functional components.
// Always create state variables on the start/ top of components(prevents inconsistency in code).
// Never create useState hooks in ..if ...else condition / for loop/ ternary conditions... this can cause inconsistency in program.

//================================================================================================
//https://reactrouter.com/en/main    // Different routers
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// createBrowserRouteris used to create routing config:
const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>
    },
    {
        path: '/about',
        element: <About/>
    }
]);


// RouterProvider is used to provide routing config to our app.
root.render(<RouterProvider router={appRouter}/>)


//import { useRouteError } from "react-router-dom";
//const err = useRouteError();
    console.log(err);
// Ye hume jo bhi error aaya hai uske bare mai detailed error deta hai.
//<h2>{err.status} | {err.statusText} | {err.data} | {window.location.href}</h2> 


//<Outlet>
//Whenever there is a change in the path, Outlet will be filled with the children according to the path.


// <Link/>
// <Link/> component is similar to <a> </a> tag, the difference is with anchor tag the whole page gets refreshed, but with link. the whole page won't refresh/reload, the Component is updated.
//Anchor tag reloads the whole page, but Link doesn't "Reload the whole page", It just "Refreshes the component".
// Thats why react is a single page application.
//import { Link } from "react-router-dom";

/* <li>
   <a href='/about'>About Us</a>
</li>
                    
<li>
   <Link to='contact'>Contact Us.</Link>
</li> */

// When navigating to a different route always use <Link/> component. It will not reload the page.
// Link is a wrapper over anchor tag. If you inspect Link tag in html source you will see anchor tag only.
//================================================================================================
// There are 2 types of Routing:
// 1. Client side Routing:

// 2. Server side Routing.

//Server-Side Routing vs. Client-Side Routing
//Server-side routing is the traditional approach to handling routes in web applications. The process involves requesting a new page from the server and providing it to the user every time a link is clicked. One major issue with server-side routing is that every request results in a full page refresh, which is not performance efficient in most cases.(page eg. About us comes form the server).

//Unlike server-side routing, client-side routing involves JavaScript handling the routing process internally. In client-side routing, a request to the server is prevented when a user clicks a link, hence no page refresh even when the URL changes.(In Client side Routing all the components/pages are already loaded in the application, when our page gets loaded the 1st time.) // React used CS Routing, hence SPA and fast.

//Routing
// createBrowserRouter
// RouterProvider
// Link
// ErrorPage
// errorElement
// useRouteError hook
// Children routes

//================================================================================================
// Functional component is a function which returns jsx.
// Class based component is a class which extends React.Component that has render method which returns a piece of jsx.

//================================================================================================
//super(props);
//Super() in React component //Why super is used in React?
//Super() function is to call the constructor of the parent class. It is used when we need to access a few variables in the parent class. It returns an object which represents the parent class.

//Why would you use super constructors with props arguments?
//The purpose of using the super constructor with a props argument is to allow a component to inherit the properties of its parent component and also pass in additional properties as arguments to the component.

//When we miss passing props inside 'super(),' it won’t assign props to this context and will be 'undefined' inside the constructor. You might wonder if it doesn’t assign it to this context; how is it rendering inside the render method?

// agar super() likte hai tho render ke andar hum this.pro.somevalue access kar sakte hai. lekin constructor ke under uska value undefined aayega because:

//Here’s the catch, ===>>> "React assigns props on the instance right after calling the component constructor"

//React under the hood
//const instance = new DefinedComponent(props);
//instance.props = props;

//So, even if we don’t pass props to super(). React will still assign them right afterward. That’s why it works inside the render method and not in the constructor.

//================================================================================================
//functions are invoked/called.
//Instance of class is created.

// All the props we pass to a component, will be combined into a single object, and will be passed as a props.
//<User name={"Dev functional"} location={"Thane Class"}/>


// In constructor we receive props and create state variables.

// When the class is instantiated first the constructor is called and then the render method is called.

//=========================//========================= 
// Calling Order in class component

// Parent Const
// Parent render

//   Child Const 1
//   Child render 1

//   Child Const 2
//   Child render 2

         //< till now, DOM updated - in single batch>
 // Child CompDidMount 1
 // Child CompDidMount 2

// Parent CompDidMount
//=========================//=========================

//React Life cycle method
//  https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ 

// React batches render phases of all child together an then will run commit phase of all child together.

// In Mounting 2 phases:
/**
 * 1. Render Phase
 *    a - Constructor
 *    b - render()
 * 2. commit Phase
 *    a - react updates dom and refs
 *    b - componentDidMount
 * /

// Render phase is very fast, Commit phase takes time.
//===================================//=========================
------Mounting-------
    constructor called 
    state is initialized with initial values
    Render(called with dummy state values)
       <HTML  Dummy>
    Component Did Mount
      <API call is made.>
      <this.setState>   --> State variables are updated.

----- UPDATE----------
    render(API data, coming from new Props and setState())
    <HTML    (new api data)>
    Component Did Update.
//===================================//=========================
// ComponentWillUnmount will be called just before the component will be unmounted. i.e, removed from the DOM.




//================================================================================================
//  rafce shortcut creates react functional components in vs code.

//================================================================================================
// Never update state variables directly 
this.useState.count = this.useState.count + 1;
// this is wrong.
<button onClick= {() => {
                    this.setState({
                        count : this.state.count + 1,
                    })
                }}>click class</button>
//above one is right
// state variable is a big object.

//================================================================================================
useEffect(() => {
//...
}, [count1, count2])

the above of  functional component is equivalent to below class component code.

ComponentDidUpdate(prevProps, PrevState){
 if( this.state.count1 !== PrevState.count1 || this.state.count2 !== PrevState.count2) {
   //....
 }
}

//================================
Agar hume count1 ke change pe kuch karna hai and count2 ke change pe kuch aur karna hai. Tho hum useEffect() 2 bar likh  sakte hai. like.
useEffect(() => {
//...
}, [count1])

useEffect(() => {
//...
}, [count2])
//================================

Agar hum home route/page pe componentDidMount mai kuch
setInterval(() => {
            console.log('hello');
        }, 1000)
karte hai, aur agar hum, dusre route pe jate hai. tho bhi hamara setInterval chalte hi rahega, and that to at higher speed. isliye is setInterval jaise chizo ko hum ComponentWillUnmount mai remove/clear karte hai, jab humara page DOM se nikalta hai tab.  Nahi tho app crash ho sakta hai.
//========================================================================

// Why is useEffect funcion not async.
//When we make useEffect function async it returns a promise and useEffect doesn't expect the callback function to return Promise, rather it expects that nothing is returned or a function is returned.

As a workaround for the warning you can use a self invoking async function inside useEffect.

//========================================================================
//Single responsibility principle/ modular / testable/ maintainable / reusability
//Single responsibility principle ==> ek function/ component sirf ek hi kaam karega.
//Isse code modular hota hai.
//Test cases likne mai asani hota hai. agar koi bug hua tho test case mai pakad sakte hai.

//========================================================================
//React Hooks are utility/helpers functions made to some task.

//========================================================================
// Split the website into smaller bundles according to the functionality. So that our js file doesnt get much heavy.
// chunking
// code splitting
// Dynamic bundling
// Lazy Loading::         // isse light weight //optimzed // very performant ho jata hai.
// On Demand Loading
// Dynamic import    

// To reduce the bundle size be do code splitting. // Bundle size hum index.js ka network tab mai dekh sakte hai.
// All the code does not come at once, it will only come when it is requested.
// when used lazy loading, when clicked on grocery, the grocery file is not yes loaded, but react tries to render if, it leads to error. In order to handle this state, Suspense component is used.

const Grocery =  lazy(() => import('./components/grocery'));

{
   path: '/grocery',
   element: <Suspense fallback={<h1>Grocery page is loading...</h1>}><Grocery/></Suspense>
}

lazy is a function. Suspense is a Component.
//=============================================================================

// Normal CSS

// SASS  
// SCSS
// Styled Components
*/
//CSS Library //material UI : is a React component Library, gives component out of the box
// Gives pre styled component // already beautiful component.// gives pre build component.
// BootStrap
// Chakra UI
// Ant Design


//=============================================================================
// Tailwind css : 
//https://tailwindcss.com/docs/guides/parcel
//npm install -D tailwindcss postcss
//npx tailwindcss init   ===> is command se hum tailwind ko apne project/repo mai initialize karte hai  // ==> It create  tailwind.css.js file  ==> ye tailwind css ka configuration file hai


//Postcss is used a tool for transforming CSS with JavaScript
//TailWind css uses postcss behind the scenes.

// .postcssrc is a configuration file for postcss


/** 
{
  "plugins": {
    "tailwindcss": {}
  }
}
 Is line se postcss ko pata chalta hai ki hum tailwindcss use kar rha hai.

 Parcel our bundler will use .postcssrc file  to understand tailwind.


 content: [
    "./src//*.{html,js,ts,jsx,tsx}",
  ],
 isse hum tailwind ko batate hai kin files ke andar hum tailwindcss use kar sakte hai.
 the above line means  => anywhere inside the src folder, html, js ... etc file ke andar hum tailwind likh rhe hai.
 Now our project can track automatically where our tailwind classes are there. 

 

@tailwind base;
@tailwind components;
@tailwind utilities;
isse hum tailwind apne css file mai import karte hai.

Tailwind css gives us classname for ever css we need to write for application.


Advantage => 
Offers faster development.
Very light weight => parcel sirf wo hi css classes tailwind mai se apne project bundle mai dalega jo hum use kar rhe hai. Keeps bundle size small.
TailWind redundant css ko nikal deta hai.
Only css we use will be shipped.
Gives css on the fly,dont have to move back and forth between css and js file.

Disadvantage =>
Initial learning curve => 1st disadvantage in tailwind
2nd => When we need to apply a lot of css, then our js file will become ugly/ less readable.
<div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
      <div class="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
        <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center">
      </div>
</div>


<div className="bg-pink-100 sm:bg-yellow-100 lg:bg-green-100">
Above code: by default bg color pink rakho, but if the size increases than sm => tho yellow kardo. If size increases than lg tho green kardo. 

================================================================================================================
Higher Order Component ==> 
Is a function that takes a component inside, enhances the component/ adds extra features to it and return a new component.

Higher Order Component are pure function, they do not change the behaviour of the component,they just add some additional properties/enhances to it.

HOC 
Input - RestaurantCard  => Output - RestaurantCardPromoted

=================================================================================================================
All React applications have 2 layers
1. UI layer (JSX,  It is powered by data layer)
2. Data layer (consists of state, props, local variables, data)

group?.card  is same as group?.["card"]

// Accordian

// HOC

// Controlled and UnControlled component.

// Lifting state up
//Many times, multiple components must reflect the same changing data. And if the data is not in sync between the "parent and children components" or "cousin components", it is recommended to lift the shared state up to the closest common ancestor.
We lift the state up to make the parent state a single shared state and a sole "source of truth" and pass the parent's data to its children. 
This concept is called lifting state up. It is of great use to maintain "data consistency" in our react applications.

// To pass data from child to parent
*** Parent ***
  const [showIndex, setShowIndex] = useState(null);

  {categories.map((category, index) => 
            <RestaurantCategory 
               key = {category.card.card.title} 
               data ={category?.card?.card}
               showItems = {index === showIndex ? true : false}
               setShowIndex = {() => setShowIndex(index)}
            />)}

*** Child ***
const RestaurantCategory = ({data, showItems, setShowIndex}) => {

   handleClick = () => {
        setShowIndex();
    }

    <div className="flex justify-between" onClick={handleClick}>

    { showItems && <ItemList items = {data?.itemCards}/>}

// Props Drilling

// React has one way data flow (parent to children)


// Global Data can be accessed using React context => Provides central store
// React Context  => Keeps Data in the central place, prevents props drilling.
// Logged in user info can be required in any component anywhere inside the App.
// Theme (Light, Dark)
*/
//Create kiya
import { createContext } from "react";
const UserContext = createContext({
    loggedInUser : "Default User",
});
export default UserContext;

// Use kiya (functional mai) / consume liya
import { useContext } from "react";
import UserContext from "../utils/UserContext";
  const {loggedInUser} = useContext(UserContext);
  <li className='px-4 font-bold'>{loggedInUser}</li>

//Use kiya (class component mai) / consume liya
import UserContext from "../utils/UserContext";
    <UserContext.Consumer>
    {({loggedInUser}) => <h1>{loggedInUser}</h1>}
    </UserContext.Consumer>




// Only that data that is to be used at multiple places must be kept in Context. 
// Context is a Global space i can provide to a whole application or just a small portion of application. We can create multiple context.
// When we need to access something all across our app, We wrap our whole application with the respective context provider. So that whole application can use it.

// In small and mid size applications context can work in better way, no need of other data/state management libraries (like Redux => creates store)
// Agar Context use karte bade applications mai tho apne ko multiple contexts create karne padenge like CardContext, UserContext, UIContext, ThemeContext.
// Redux is scalable. Redux has became a kind of standard for state management when building larger applications.
// Redux is used mainly in large scale applications where data is heavily used, lot of read write operations are happening. Lot of data transfer.
// Redux Offers easier debugging.
// A Predictable State Container for JS Apps

// Redux is not mandatory.
// Redux and React are different libraries.
// Zustand  => Another state management library like Redux.

//The "Redux Toolkit" package is intended to be the standard way to write Redux logic. It was originally created to help address three common concerns about Redux:

1. "Configuring a Redux store is too complicated"
2. "I have to add a lot of packages to get Redux to do anything useful"
3. "Redux requires too much boilerplate code" 

//***Redux Store***
// Redux store is big whole js object, Kept in a central global place.

// Redux store becomes very big, therefore we create different parts of redux stores called as ***"Slices"***. // We can create cart slice, theme slice, user slice. 
// Slices are logical Separations created inside Store on basis of different logical operations.

// Hum store ke andar direct value change/add nhi kar sakte.

***********Redux************

***Write Data***
When we click on `add button`  ====> It `dispatches an "Action"` ====> that action will `call a "Reducer" function` ====> that function() will then internally `"Modify/Update" the slice of our Redux Store`(here Cart).

***Read Data***
When we need to show/read data from the store in the UI. We will use a "Selector" to read the data from the store, and the selector will modify our react component.
In Short Selector gives us the data from the store. (When we use selector, this phenomenon is known is "Subscribing to the store"). We say like header component is subscribed to our store. i.e the `header` is in sync with the store. If the data inside the store changes, my header component will update automatically.
`The Header component is subscribed to the store using a Selector`,  `so whatever the data inside the store changes, my header component will update automatically`

# Redux Toolkit
- Install @reduxjs/toolkit and react-redux
- Build our Store
- Connect our Store to our app.
- Create Slice(cartSlice)
- dispatch(action) 
- Selector

import { configureStore } from "@reduxjs/toolkit"
configureStore comes from "@reduxjs/toolkit", because it is core redux thing.

import { Provider } from 'react-redux';
Provider comes from 'react-redux' , because provider acts as bridge between react and redux.

1 hour 2 mins



