# christian-lagasca-brainflix <br>
# Project Overview
You have been approached by an entrepreneur to build out a prototype for a new video streaming platform called BrainFlix. The entrepreneur has meetings lined up for funding with several VCs and needs the prototype built within the next three weeks. BrainFlix’s Creative Director has provided you with a package and mockup of how they envision the final product. There is also a separate team that is currently working on a back-end API needed to integrate with the front-end, but for the time being the static components need to be put together.

It will be your job to create a functioning and responsive app prototype from the project designs provided.

# Sprint 1 Requirements <br>
The ”Next Video” list must not contain the current video being displayed.
The site must be responsive at and between breakpoints, and should closely resemble the mockups in the design package.

# Sprint 2 Requirements <br>
Clicking the BrainFlix Logo must link back to the home page. <br>
There must be 3 routes: <br>
The Home/Video Player Page for displaying the details of a video. <br>
The Video Upload Page. <br>
A route which will load the video with the provided video id to be displayed using the Video Player Page.<br> 
Clicking on a video in the “Next Video” list must go to the Video Details Page for the selected video and display all the information for the video such as (likes, views, author, etc). <br>
Clicking on the “Upload” button must link to the Video Upload Page. <br>

Posting Comments <br>
To add another layer of functionality to the site, try adding the ability to post comments. Please refer to the "Diving <br> Deeper" design package for sprint 2 for an ideal visual implementation. Regarding the technical implementation, the <br> following requirements should be met: <br>

When posting a comment, ensure that the page does not refresh. <br>
You must POST a comment to the API. <br>
If successful in posting the comment, render the new comment by sending a new request for the "Main Video" data. <br>

# Sprint 3 Requirements <br>
API Server <br> 
The end-points and response structure of your API server must match that of the mock API server. <br>
The API must have the following end-points: <br>
GET /videos that responds with an array of videos. <br>
GET /videos/:id that responds with an object containing the details of the video with id of :id. <br>
POST /videos that will add a new video to the video list. A unique id must be generated for each video added. <br>
Submitting a new video from the form must POST to the API. The user must provide the hard-coded image path for the video <br> thumbnail on the front-end during the form submission. <br>

Video Upload Page <br>
With the "Video Upload" page now created, add the actual upload functionality. Specifically, this should include an event <br> handler for the upload form so that when a user submits a new video, it POST’s the video to your API in order to save <br> it to the list of videos.<br>

Liking Videos <br>
Part 1: Implement a PUT endpoint at /videos/:videoId/likes that increments the like count of the video specified by video. <br> Part 2: Building on the previous task, hook up an event handler to the like button (in the React front-end) to send a <br> PUT request to hit your /videos/:videoId/likes endpoint. <br>

## Technologies Used 
React, Express, Node.js, Axios, React Router, SASS

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
