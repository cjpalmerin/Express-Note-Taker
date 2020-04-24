const fs = require("fs")
const jsonNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));


module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        res.json(jsonNotes)
        // JSON.parse(fs.readFile('./db/db.json', (err, data) => {
        //     if (err) throw err;
        //     return JSON.parse(data);
        // });
    });
    app.post("/api/notes", function (req, res) {

        let noteId = jsonNotes.length + 1
        console.log(noteId);

        let newNote = req.body;
        newNote.id = noteId;

        // fs.appendFile('./db/db.json',req.body, (err) => {
        //     if (err) throw err;
        //     console.log("Success");
        // });

        jsonNotes.push(newNote);
        res.json(jsonNotes)
    });

    app.delete("/api/clear/:id", function (req, res) {
        if (newNote.id === req.params.id) {
            jsonNotes.splice(newNote.id, 1);
        }
        res.json(jsonNotes)
    });
}