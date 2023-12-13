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
--# Things Parcel do: (https://parceljs.org/)
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
eg : const jsxHeading = (<h1 id='root' 
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
in JS
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
