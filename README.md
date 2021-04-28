# SE_19
### A react app build for the SE_19 module. The App uses react, react-dom, typescript and makes API calls to a webserver that runs a node app. The node app is connected to a mongodb (atlas).
## Running the App
###Running locally:
####1. You need to have node installed
####2. You  need to have the yarn package manager
####3. Clone the repo and hit `yarn install` in you terminal
####4. Last thing to start the app hit `yarn run`
###[Live version](https://www.chimp.berlin/se19/)
###[API link](https://dry-refuge-25840.herokuapp.com)

![app](https://i.ibb.co/Z6qtCY1/Screenshot-2021-04-28-at-15-16-36.png)

###React Frontend
Using the React library, I developed some components in TSX (Typescript XML). In the App.tsx file, I used a react hook to create a new state object. According to data changes, my components will update their view based on the state. Here you can see the components that I used:

![components](https://i.ibb.co/M14w8bv/Screenshot-2021-04-28-at-20-46-07.png)

###Flow
![flow](https://i.ibb.co/CsNXx6Q/Screenshot-2021-04-28-at-21-15-12.png)
1. A user is opening a browser and sends a request to the webserver where the website is running.  
2. The web server runs on apache (hosted on strato). Apache serves the requested files back to the user. The Browser is interpreting the files and displays the content.  
3. Javascript code gets fired in the browser. That sends a request to the webserver from the REST-API. This API web server is running on cowboy and is hosted on Heroku.  
4. The REST-API webserver gets the request and sends a request to the webserver where the database is hosted. (hosted on MongoDB Atlas).  
5. MongoDB sends a response back to the API web server.  
6. The API web server returns a response to the browser. After that: React state updates the components based on the data that was in the response. The user can now add and delete things, and these actions will always trigger the numbers 3-6 in the diagram.