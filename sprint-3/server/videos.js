const express = require('express');
const router = express.Router();
const nanoid = require('nanoid')
let videos = require('./data/videos.json');
let mainVideos = require('./data/mainVideos.json')

router.get('/',(request,response) => {
    console.log('GET method got called and responding with send data');
    response.send(videos);
})

router.get('/:id', function(request, response) {
    const id = request.params.id;
    const mainVid = mainVideos.find( item => item.id === id);
    (mainVid !== undefined) ? response.send(mainVid) : res.status(500).send('Something broke!') //if page doesnt exist send error
});

router.post('/:id/comments', (request,response)=>{
    const newComment = {
        "name": request.body.name,
        "comment": request.body.comment,
        "id": nanoid(),
        "likes": 0,
        "timestamp": new Date().getTime()
    }
    const id = request.params.id;
    const mainVid = mainVideos.find( item => item.id === id);
    mainVid.comments.unshift(newComment);
});

router.post('/', (request,response)=>{
    const newVideo =  {
        "id": nanoid(),
        "title": request.body.title,
        "channel": "BrainStation Man",
        "image": "https://images.unsplash.com/photo-1543332164-6e82f355badc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        }
    const newMainVid =
    { 
       "id": newVideo.id,
       "title": newVideo.title,
       "channel": newVideo.channel,
       "image": newVideo.image,
       "description": request.body.videoDescription,
       "views": "0",
       "likes": "0",
       "duration": "4:20",
       "video":"https://project-2-api.herokuapp.com/stream",
       "timestamp": new Date().getTime(),
       "comments":[]
    }
    videos.push(newVideo);
    mainVideos.push(newMainVid);
});

router.delete('/:id/comments/:commentId', (request, response) => {
        const id = request.params.id;
        let mainVid = mainVideos.find(item => item.id === id);
        const newComments = mainVid.comments.filter( item => item.id !== request.params.commentId);
        mainVid.comments = newComments;
        response.send();
});

router.put('/:id/likes', (request, response) => {
    const id = request.params.id;
    let mainVid = mainVideos.find(item => item.id === id);
    let likes = parseFloat( mainVid.likes.replace(/,/g, ''));
    console.log(likes);
    likes++;
    mainVid.likes = likes.toLocaleString();
    response.send();
});


module.exports = router;