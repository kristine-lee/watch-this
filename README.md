# 🍿Watch This!


## Overview
---------
Movie searching app that lets users search movies by title. Emulates a startup aesthetic.


## How to run locally
-------
1. Clone this repository to your local machine
```git

git clone https://github.com/kristine-lee/watch-this.git
cd watch-this

```
2. Install the dependencies
```npm
npm install

```
Create a file called "secrets.js" and add it to your gitignore. This is where you will store sensitive information such as API keys and your MongoDB username and password.

3. Set up MongoDB
Sign up for a free MongoDB account here: [https://www.mongodb.com/] <br>
Create a new project on MongoDB Atlas. Within the project, you will need to instantiate a new "cluster." Once your cluster is established, follow the instructions to connect your application to the cluster. <br>

4. Get the API key
Sign up for a free key with OMDB database here: [http://www.omdbapi.com/] <br>
All you need is your email. That's it! Add this to your secrets.js file as process.env.API_KEY

5. Start the Project
```npm
cd server **important!** <br />
npm run start
```
<br>
To test, use: <br>
```npm
npm run test
```

## Built With
-----
* React
* Material UI
* Node.js
* MongoDB
* Express

Checkout /package.json

#### Motivation
----------
Mostly, I wanted to learn MongoDB. I've been used to using a relational database and wanted to practice working with a NoSQL database. I also wanted to practice writing more tests, which I incorporated on the server side. Finding a suitable testing framework proved to be challenging. I finally settled on Jest, as it offered more flexibility than others and built-in support for MongoDB.<br/>

#### Stretch Goals
----
* Implement a ratings feature
* More test coverage, especially on the front end
