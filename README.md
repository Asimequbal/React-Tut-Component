start with: npm init
then package name you can keep as it or change
then version press enter
the description
version: (1.0.0)
description: this is react component git
entry point: (app.js) you can change this also
test command: jest                                                                                                                                                                                       
git repository: https://github.com/Asimequbal/React-Tut-Component.git                                                                                                                                    
keywords: react component                                                                                                                                                                                
author: asim equbal
license: (ISC)
About to write to D:\REACT COMPONENT\package.json:

{
  "name": "react-component",
  "version": "1.0.0",
  "description": "this is react component git",
  "main": "app.js",
  "scripts": {
    "test": "jest"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Asimequbal/React-Tut-Component.git"
  },
  "keywords": [
    "react",
    "component"
  ],
  "author": "asim equbal",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/Asimequbal/React-Tut-Component/issues"
  },
  "homepage": "https://github.com/Asimequbal/React-Tut-Component#readme"
}


Is this OK? (yes)
Then install bundler/parcel/veet/ npm install -D parcel
-D use for 
there are 2 types of dependcies 1. DEV dependencies: it is genrally require in development 2. Normal dependncies required in production

("parcel": "^2.9.3") for version control we use ^ => carate use to control minor update
~ tilde is use to control major update

Package.jason => it keeps the track of what version is install in app
Package-lock.jason =>it keeps the track all version and keeps all records of package and depnedicies
node module contains all the code that we fetch from npm
TRansitive dependencies: for e.g.this project have dependencies and Parcel have their own dependencies those dependencies have their own this is called transitive dependencies.
 NOw  start the local server by: npx parcel index.html
 NOW install the react to out project : npm install react
  NOW install the react DOM to out project : npm install react-dom
  Then after installation of package use import keyword 
  #parcel
  - DEV build
  - Local Server
  - HMR Hot module Replacement
  - File watching algorithm
  - Caching - Faster BUilds
  - Image optimization
  - Bundling
  - Minification
  - Compressing the files for production
  -Consistance hashing
  - Code spliting 
  -Differntial Bundling  -When your app is hosted on diffrent app it helps to host on older version also
  - Http support
  - Error handling 
  - Diagonistic
  - Tree Shaking - Remove unused code


  - When we run npx parcel build index.html we get error so then remove ("main": "app.js",) from package.jason (for production ready code)
  - To configure the browser support we have to configure the package.jason which browser should supports 
  - Create script for Development to run the project in package.json {"start": "parcel index.html"} npm start
   from production {"build": "parcel build index.html"} npm build start
  -JSX---
  

