const express = require('express');
const app = express();
const cors = require('cors');
const videosRoutes = require('./videos');

app.use(cors());
app.use(express.json());
app.use('/videos', videosRoutes);

app.listen(8080, () => {
    console.log('server started');
})

