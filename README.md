# christian-lagasca-brainflix <br>

# Sprint 1 Requirements <br>
The site must closely resemble the mockups and design specs provided in the design package.
The site must be responsive at all dimensions, including between the provided break-points.

# Sprint 2 Requirements <br>
## Comments Section
There must be a button that allows a user to add a new comment.
The user must be able to add their name and a comment.
The comments must be added such that the newest comments are at the top.
3 Default comments must be displayed when the page first loads.

# Sprint 3 Requirements
The Home Page must retrieve comment data from the provided API and display it on the page.
Users must be able to add new comments that are stored on the back-end using the API.
New comments that are added must be displayed with the existing comments, the newest comments being at the top.
The Home Page must not reload when comments are added.
The Shows Page must display the shows data retrieved from the API.

Comment Delete Functionality
The API has a DELETE endpoint that you can use to delete comments. Try adding adding a delete button to each comment. When clicked, this button triggers a function that deletes the comment both from the API and also from the DOM. Information about the comment delete endpoint can be found in the API documentation.

## Shows Page
There must be a song that can be played. The song can be any song you choose.

# How to start the site <br>

change directory into sprint 3 <br>
run : cd sprint-3 <br>

start server by changing directory into server folder <br>
run : cd server <br>

run npm install then start up the server with node.js <br>
run : npm install <br>
run : node server <br>

start client site by changing directory into client folder <br>
run : cd client <br>

run npm install and then start up the client <br>
run : npm install <br>
run : npm start <br>


Functionalities of the project <br>
  1 ) Build a backend server to serve data to the website using node.js and express <br>
  2 ) Be able to upload new videos to the site and save the data to the backend <br>
  3 ) Have different data sets for each videos and be able to interact with them <br>
        * Ability to add and delete comment <br>
        * Ability to like a video <br>
  4 ) Be able to play a video using a stream <br>
