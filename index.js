// DEPENDENCIES
const fs = require('fs');
const express = require('express');
const app = express();
const port = `5001`;
const cors = require('cors');

// LOAD LIBRARIES
app.use(cors());

// API ENDPOINTS
app.get('/', (req, res) => {
    const fileTypes = [
        'csv',
        'jpg',
        'pdf',
        'png',
        'xslx'
    ];

    // Check if the right request is coming through for the file type
    return new Promise((resolve, reject) => {
        if (req.query.file && fileTypes.indexOf(req.query.file.toLowerCase()) > -1) {
            return resolve(`sample.${fileTypes[fileTypes.indexOf(req.query.file.toLowerCase())]}`);
        }
        return reject(`Please provide a file type of ?file=${fileTypes.join('|')}`);
    })
    // Validate if the files exists
    .then((file) => {
        return new Promise((resolve, reject) => {
            if(fs.existsSync(`./files/${file}`)) {
                return resolve(`./files/${file}`)
            }
            return reject(`File '${file}' was not found.`);
        })
    })
    // Return the file to download
    .then((filePath) => {
        res.download(filePath);
    })
    // Catches errors and displays them
    .catch((e) => {
        res.status(400).send({
            message: e,
        });
    });
});

// HTTP SERVER
app.listen(port, () => console.log(`Listening on port: ${port}`));