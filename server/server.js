const path = require('path');
const fs = require('fs');

fs.readFile(path.join(__dirname, '../chirps.json'), (err, data) => {
    if (err) console.log(err);
    let parsed = JSON.parse(data);
    parsed.chirps.forEach(chirp => console.log(chirp.message));
});