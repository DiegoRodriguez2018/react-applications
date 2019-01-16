Mini MERN Project

*Full Stack MERN Project* @channel

This is a chance to implement a full MERN stack app, and get some practice with all the pieces of technology we have used to date. 
- This time around we are going to base the app around recipes (unless you have a strong feeling about what you’d like to do instead - but note that discussions about the structure of your data and various other elements will be more difficult if you go down this route).

- If you are feeling confident, you are welcome to take this project off in any direction that you like, and start building something that you are interested in, as long as you use *Node*, *Express*, *Mongo/Mongoose*, and *React*.

- But if you are keen on some direction, please follow these steps. We can run some review classes on each stage as needed throughout the week. You will need to keep an eye on announcements when these are coming up.

- If you don't understand what is going on in any of these steps, please ask. It is important to understand why you are taking these steps as you go. Come to the review classes as necessary.


1. First think about how to arrange your data. This is a vital element and not to be taken lightly. Use this time as a way to get used to thinking in this new way, and representing your data as Mongo allows. As we did in the first instance, we can nest all the data for now, and look to pull the nested data out into collections down the track. The main thing is to get started with something that makes sense and that we can work with. We just need the basic structure, so come up with two or three recipes, and one or two ingredients per recipe to represent the data structure. *We will run through some ideas about the data and discuss how things might be best set up at 3:45pm*
---
database-name :  recipes
collections: recipes, ingredients

recipes = [{
   id: number
   name: string
   ingredients: 
}]

ingredients = [{
   id:
   name:
}]

---

2. Build a very simple API. For now hard code in your data and build just one route that gives back all your data as one object.

3. Use Postman to hit your API and see that you are getting the data back as you expect.

4. Use create-react-app to make a new front end project (totally separate from this API). For now, hard code the data into the app, and work on getting something simple to display.

5. Make a Recipe component, and have this display. Then swap this out for a list of recipes - map through your recipe data and have each band display (at the root).



6. Connect up MongoDB. If it's simpler for now, you can have just one collection, and hold that data there, returning one big complex object. Use Mongoose to do this. Set up a Mongoose schema for your data, and attach this to your API.

7. Check that this data is available from your API using Postman.
8. Now we have connected our API to our Mongo database (via Mongoose), and we are getting our data back from the API. We need to connect our React front-end to our Express API and have everything connected. You can do this several ways, but let's start by keeping it simple. We have all out data represented in one big structure in our MongoDB, and our API returns that structure from one route. Previously we represented the data in our React front end in the same way. So from your App component, write a function that will hit the API and return that structure. If you have this going, you will be able to take out the hard-coded data from the React side. You will need to consider lifecycle methods, and placing the data into state.
   
9.  Now our app is wired up from start to finish. Hopefully at this stage you will have a good idea of how it all fits together. From here we will start to think about ways to make the app more complex, and make some more end points for our API. We will also start to think about how to better structure our data using Mongoose. But if you have made it this far *you have created a full-stack MERN project!*

-------------------------DONE------------------------------------


1.  Make the recipes clickable, and have the recipe heading and ingredients for the recipe appear on the page when clicked.



2.  Now make the cooking method clickable. When clicked, show only the the steps for that recipe to the user, along with the ingredients. 
    
3.  Implement routes in your Express app to return all the recipes in the database, and the ingredients in the database.
    
4.  Make a route that returns only the ingredients from an recipe (when the recipe is passed as params).
    
5.  Separate out your data using Mongoose. Instead of having one big nested structure, break the data out into several collections, and then use Mongoose to reference the collections as needed.
    
6.  Extend the challenge to implement React Router if you have not already done so.
    

    ------------------------------------

7.  Implement a way to register a new user and login an existing user
   - this will require changes to all components of the MERN stack - new components using forms in React, new routes in API and new models for Mongoose
- 
17. Create protected routes using Express middleware that restrict a logged in user from accessing particular routes - for example only logged in users can see all recipes/methods/ingredients (swap this out for whatever you are building) but to add a new recipe/method/ingredient you must be logged in - to delete a recipes/methods/ingredients you must be an admin.
    
-----

18. Extend your login and register routes to respond with the successful user object - all fields except the password. Save this in localStorage when you get it back from the fetch/axios request.
    
19. Now that you have the user in the frontend, update the React homepage to include a personalised welcome message for the user.
    
20. Implement full Create/Read/Update/Delete (CRUD) operations for your artists/albums/songs (again, swap this out for your example)
   - again, this will require you to implement functionality in multiple components of your system - API and React
 - 
21. Extend the login and register endpoints in the API to attach a `secret code` field with the key `token` to the user object before sending the response.
    
22. Extend the protected API endpoints to ensure that the user has posted across the correct token
    
23. Update the React frontend to pass across only the token in the body of the post/put requests for protected routes
    
24. Handle all failed responses in the React frontend - Not authorised, incorrect authentication details, no artist/album/song etc - and display appropriate messages to the user.