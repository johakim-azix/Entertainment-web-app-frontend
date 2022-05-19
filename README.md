# Frontend Mentor - Entertainment web app solution

This is a solution to the [Entertainment web app challenge on Frontend Mentor, you can click here to view the chalenge](https://www.frontendmentor.io/challenges/entertainment-web-app-J-UhgAW1X). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate between Home, Movies, TV Series, and Bookmarked Shows pages
- Add/Remove bookmarks from all movies and TV series
- Search for relevant shows on all pages
- **Bonus**: Build this project as a full-stack application
- **Bonus**: If you're building a full-stack app, we provide authentication screen (sign-up/login) designs if you'd like to create an auth flow

### Screenshot

![Design preview of the Entertainment web app](./src/assets/design/preview.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)
- Frontend Solution URL: [Add solution URL here](https://your-solution-url.com)
- Backend Solution URL: [Add solution URL here](https://your-solution-url.com)

## My process
#### step 1 : template building
I started by building the responsive template (html, scss), then i've extracted components, pages, with their style, and logic (at this state empty js).
From that i had a clear idea of how i wanted him to navigate through the app.

#### step 2 : Routing
##### Page navigation : 
Navigation between register, login, and home; so my first router-view where will be displayed either login either register or home page with navigation items and corresponding fragments.

##### Fragment navigation :
Navigation between  movies, series, recommendation, bookmarked and search fragment.
So the router-view where will be displayed fragments for each side navigation item(movies, series, recommendation and bookmarked).
At the end of this step i have a full vue entertainment web app template, With data from the data.json, and some logic in components.

#### step 3 : building backend 
Actually the backend is a separate project.
It's built with : Node.js, Express.js and MongoDB.

During this step i : 

- Choose conventions, and project patern (architecture : how files will be organized); 

![Backend Project Structure](./src/assets/backend%20pattern.PNG)



##### Setup and Express App, connexion to mongoDb, environment configs, general middleware that allow request from the frontend, some headers, methods etc...
```js
const env = require("../env.configs")
const mongoose = require("mongoose")
const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
const authRouter = require("../routers/Auth")
const mediaRouter = require("../routers/Media")
mongoose.connect(env.configs.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => console.log(' MongoDB : connexion Ok !')).catch(() => console.log('MongoDB : connexion Ko !'));

app.use(express.json());
app.use(cookieParser());
app.use("/public",express.static("public"))
app.use((req, res, next) => { /*todo : general middleware ; it's applied to every request*/
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.use("/Api", authRouter)
app.use("/Api", mediaRouter)

module.exports = app
```

- Setting up routes, controllers, services, middleware, seeders and other requirement 

- Setting up auth session with refresh and access token  

#### step 4 : Link the frontend to the backend,  State management  
I've completed the frontend side with state management, events etc... 

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Scss
- CSS Flexbox
- CSS transitions
- CSS animations
- CSS Grid
- Mobile-first workflow
- [Vue.js](https://nextjs.org/) - Vue CLI
- Composition API & Option API
- Events
- State Management
- Routing 
- Fetch API 
- Image Treatment (canvas) 
- Node.js   
- Express.js   
- MongoDb   
- mongoose   
- JWT   
- Bcrypt   

### What I learned

With this challenge i've kinder revised my lessons!!
I've been through a lot of documentation on app security issues, others solutions about them and even my own previous implementations.
I tried a custom jwt refresh and access token implementation, avoided storing auth credentials on the local storage or any of brother storage other than cookies (HTTP only), and how to avoid poor user experience by maintaining the user session for this challenge.
   
### Continued development


I'm actually in a poor internet connexion area while building this app.
For the future release i'm planning to add feature, a kind of administration panel, where i'll be adding content to the app.
Since content has images, with a specific dimensions and qualities, and i don't wanna treat them externally (resize them on photoshop as example), the feature will then rely on image treatment and upload!!
Once again we should avoid poor user experience.

So next topics will be : 
##### Css and Js image optimization.


## Author
I am Marlonne and you can find me on these media : 
- Frontend Mentor - [@johakim-azix](https://www.frontendmentor.io/profile/johakim-azix)
- Github  - [johakim-azix](https://github.com/johakim-azix/)
- Twitter - [@marlonneazix](https://twitter.com/marlonneazix)
- Instagram - [@marlonne_penda](https://www.instagram.com/marlonne_penda/)
- LinkedIn - [@joseph penda](https://www.linkedin.com/in/joseph-penda-051a111a7)
