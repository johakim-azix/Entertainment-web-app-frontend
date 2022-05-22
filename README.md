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
#### step 1 : templating
- Template building (responsive html and css template)
- Components extraction (determined what will be a component and move them to separate file with their style and js logic).

That gave and idea on how navigation will look like.

#### step 2 : Routing
##### Page navigation :
First router-view : navigation between register, login, and home pages. 
- Setting up Vue router and first routes (/register, /login, /home).
- Determining my first router-view Location.  


##### Fragment navigation :
Second router-view : navigation between  movies, series, recommendation, bookmarked and search fragments.
- Completing router with routes corresponding to each side navigation item and fragment.
- Determining my second router-view Location.
- Determining witch component (Fragment) should be lazy loaded or not. 
- Feeding components with data provided by the data.json file : here i've mostly completed some js component logic like communication between components(setting props, and events, etc...)

At the end of this step i had a almost full Vue.js entertainment web app template.

I could have been ahead, working arround with IDB of the browser for a full frontend implementation but i wanted to build it full stack.

#### step 3 : building backend 
Actually the backend is a separate project.
It's built with : Node.js, Express.js and MongoDB and some additionnal dependencies like mongoose.

I can brake this step as : 

- Choosing conventions, and project patern (architecture : how files will be organized); 

![Backend Project Structure](./src/assets/backend%20pattern.PNG)



- Spinning up a basic server Node
- Connecting to mongoDb, 
- Adding environment configs 
- Setting up an Express App, adding general middleware that allow request from the frontend, some headers, methods etc...
```js
const env = require("../env")
const mongoose = require("mongoose")
const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
const authRouter = require("../routers/Auth")
const mediaRouter = require("../routers/Media")
mongoose.connect(env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => console.log('Connexion à MongoDB réussie !')).catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());
app.use(cookieParser());
app.use("/public",express.static("public"))
app.use((req, res, next) => { /*todo : general middleware ; it's applied to every request*/
    res.setHeader('Access-Control-Allow-Origin', env.CLIENT_URL);
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

#### Step 4 : Link the frontend to the backend,  State management, Authentication
- Completing the store logic
- Implementing logic for the user session with refresh, access token, and required redirection.   

#### Step 5 : Testing and Deployment
- App testing the app and made some adjustments.
- Domain name registration.
- Subdomain creation.
- Digital ocean droplet creation, domain to server name linking.
- Droplet configuration : user creation, setting ssh authentication, installing Git, Node, Vue, MongoDb, Nginx.
- Pulling projects from github, setting up permission.
- Installing dependencies and building projects .
- Executing seeder on db so as to add records on media collection
- Individually launching app
- Setting up Nginx configurations, and server blocs

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
For the future release i'm planning to add a feature, a kind of administration panel, where i'll be adding content to the app.
Since content has images, with a specific dimensions and qualities, and i don't wanna treat them externally (resize them on photoshop as example), the feature will then rely on image treatment and upload!!
Once again we should avoid poor user experience.

So next topics will be :
- Css and Js image optimization: i've already started by implementing a profile upload but i'm not yet satisfied.
- Real time communication server VS clients : i'll give a try to a custom socket.io implementation to handle the new media added event (the change should be spread to all client once a new medias are added).
- Maybe we'll move to a PWA implementation ...


## Author
I am Marlonne and you can find me on these media : 
- Frontend Mentor - [@johakim-azix](https://www.frontendmentor.io/profile/johakim-azix)
- Github  - [johakim-azix](https://github.com/johakim-azix/)
- Twitter - [@marlonneazix](https://twitter.com/marlonneazix)
- Instagram - [@marlonne_penda](https://www.instagram.com/marlonne_penda/)
- LinkedIn - [@joseph penda](https://www.linkedin.com/in/joseph-penda-051a111a7)
