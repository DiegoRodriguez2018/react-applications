*Full Stack MERN Project* @channel

We are going to restart the project from last week. You will have all of today and tomorrow to do this, so take the time and opportunity to learn.
- You are welcome to pick a topic that you like, and think about the data that you would need to make a web app based around that topic.
- But, if you want to keep it simple, then people who want direction can make an app featuring music (bands or artists). Bands have albums, and albums have tracks. That's the basic starting complexity of the data.
- If you are feeling confident, you are welcome to take this project off in any direction that you like, and start building something that you are interested in, as long as you use *Node*, *Express*, *Mongo/Mongoose*, and *React*.
- But if you are keen on some direction, please follow these steps, and I will be running review classes on each throughout the time of the project. You will need to keep an eye on announcements when these are coming up.
- If you don't understand what is going on in any of these steps, please ask. It is important to understand why you are taking these steps as you go. Come to the review classes as necessary.

1. First think about how to arrange your data. This is a vital element and not to be taken lightly. Use this time as a way to get used to thinking in this new way, and representing your data as Mongo allows. As we did in the first instance, we can nest all the data for now, and look to pull the nested data out into collections down the track. The main thing is to get started with something that makes sense and that we can work with. We just need the basic structure, so come up with two or three bands, and one or two albums per band to represent the data structure.
   
2. Build a very simple API. For now hard code in your data and build just one route that gives back all your data as one object.

3. Use Postman to hit your API and see that you are getting the data back as you expect.

4. Use create-react-app to make a new front end project (totally separate from this API). For now, hard code the data into the app, and work on getting something simple to display.

5. Make a Band component, and have this display. Then swap this out for a list of bands - map through your band data and have each band display (at the root).

6. Connect up MongoDB. If it's simpler for now, you can have just one collection, and hold that data there, returning one big complex object. Use Mongoose to do this. Set up a Mongoose schema for your data, and attach this to your API.

7. Check that this data is available from your API using Postman.

8. Now we have connected our API to our Mongo database (via Mongoose), and we are getting our data back from the API. We need to connect our React front-end to our Express API and have everything connected. You can do this several ways, but let's start by keeping it simple. We have all out data represented in one big structure in our MongoDB, and our API returns that structure from one route. Previously we represented the data in our React front end in the same way. So from your App component, write a function that will hit the API and return that structure. If you have this going, you will be able to take out the hard-coded data from the React side. You will need to consider lifecycle methods, and placing the data into state.

9.  Now our app is wired up from start to finish. Hopefully at this stage you will have a good idea of how it all fits together. From here we will start to think about ways to make the app more complex, and make some more end points for our API. We will also start to think about how to better structure our data using Mongoose. But if you have made it this far *you have created a full-stack MERN project!*


10. Make the bands clickable, and have the band heading and albums for the band appear on the page when clicked.

11. Now make the albums clickable. When clicked, show only the album title and the tracks on the album on the page.

12. Implement routes in your Express app to return all the bands in the database, and the albums in the database.

13. Make a route that returns only the tracks from an album (when the album is passed as params).

14. Separate out your data using Mongoose. Instead of having one big nested structure, break the data out into several collections, and then use Mongoose to reference the collections as needed.

15. . KEEP WORKING ON THE CHALLENGE STEPS FROM PREVIOUS DAYS UNTIL YOU HAVE THAT DONE! There is no use in extending the app if you haven’t got it wired up and working correctly.

16. Extend the two-day challenge to implement React Router if you have not already done so.

17. Implement a way to register a new user and login an existing user
   - this will require changes to all components of the MERN stack - new components using forms in React, new routes in API and new models for Mongoose

18. Create protected routes using Express middleware that restrict a logged in user from accessing particular routes - for example only logged in users can see all artists/albums/songs (swap this out for whatever you are building) but to add a new artist/album/song you must be logged in - to delete a artist/album/song you must be an admin.

19. Extend your login and register routes to respond with the successful user object - all fields except the password. Save this in localStorage when you get it back from the fetch/axios request.

20. Now that you have the user in the frontend, update the React homepage to include a personalised welcome message for the user.

21. Implement full Create/Read/Update/Delete (CRUD) operations for your artists/albums/songs (again, swap this out for your example)
   - again, this will require you to implement functionality in multiple components of your system - API and React

22. Extend the login and register endpoints in the API to attach a `secret code` field with the key `token` to the user object before sending the response.

23. Extend the protected API endpoints to ensure that the user has posted across the correct token

24. Update the React frontend to pass across only the token in the body of the post/put requests for protected routes

25. Handle all failed responses in the React frontend - Not authorised, incorrect authentication details, no artist/album/song etc