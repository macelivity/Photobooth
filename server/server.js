const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const fs = require('fs');

app.use(cors({
    origin: '*'
}))

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/img_list', (req, res) => {
    fs.readdir(path.join(__dirname, 'img/thumb'), (err, files) => {
        console.log('sending img_list')
        files.sort()
        files = files.reverse()
        files.splice(50);
        // console.log(files)
        res.send({ img_list: files });
    });
}); 

function requestFile(req, res, dir, file) {
    var options = {
        root: path.join(__dirname)
    };
     
    var fileName = dir + file;
    console.log('requested: ' + fileName)
    res.sendFile(fileName, options, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
}


app.get('/full_image/:file', (req,res) => {
    requestFile(req, res, 'img/original/', req.params.file)
});

app.get('/thumb/:file', (req,res) => {
    requestFile(req, res, 'img/thumb/', req.params.file)
});
