# CRUD-Test
CRUD-Test is an Sample app with CRUD operations implemented with MongoDB Atlas as database and Node.js, express as the backend server.

## Working Demo
Here is a demo, running on Heroku pages. [click here](https://crud-node-express.herokuapp.com/movies). 
Following are the methods implemented,  
1.Get All movies:  
 https://crud-node-express.herokuapp.com/movies  
2.Get movie with id:  
 getrequest with parameter in query param should be given, url will be similar as below   
 http://crud-node-express.herokuapp.com/movies/getMovie?movieId=5f7496ddb7ee152b04c023ab   
3.Post a movie:  
 post request with parameter in request body should be given   
 http://crud-node-express.herokuapp.com/movies   
4.Update a movie with id:   
 put request with movieId as parameter, url will be similar as below   
 http://crud-node-express.herokuapp.com/movies/update?movieId=5f7496ddb7ee152b04c023ab   
5.Delete a movie with id:   
 delete request with movieId as parameter, url will be similar as below   
 http://crud-node-express.herokuapp.com/movies/delete?movieId=5f74979f980a9d2b1faf4221   

## To run the project on local
To run this app first you need to install all npm packages by simply running `npm i` command, then `ng serve`.

## Thanks to the following libraries/frameworks/modules
1.Mongoose  
2.Express  
3.Node.js  
4.BodyParser  
5.CORS  
6.MongoDB Atlas  
7.NodeMon  
