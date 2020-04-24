const fs = require("fs")
const jsonNotes = require('./db/db.json')

module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        res.json(jsonNotes)
        // (fs.readFile('./db/db.json', (err, data) => {
        //     if (err) throw err;
        //     return JSON.parse(data);
        // });
    });
    app.post("/api/notes", function (req, res) {
        // how to add ids everytime someone posts without using SQL
        // let firstId = -1;
        // let jsonNotesId = firstId +1
        // jsonNotes["id"] = jsonNotesId
        
        // fs.appendFile('./db/db.json',req.body, (err) => {
        //     if (err) throw err;
        //     console.log("Success");
        // });
        jsonNotes.push(req.body)
        res.json(jsonNotes)
    });
    app.delete("/api/clear/:id", function (req, res) {

    });
}