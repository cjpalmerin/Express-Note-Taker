const fs = require("fs")
const jsonNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
console.log(jsonNotes);

module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        res.json(jsonNotes)

    });
    app.post("/api/notes", function (req, res) {

        let noteId = jsonNotes.length;

        let newNote = req.body;
        newNote.id = noteId;

        jsonNotes.push(newNote);
        res.json(jsonNotes)
    });

    app.delete("/api/notes/:id", function (req, res) {

        reqParamsNum = parseInt(req.params.id)

        for(let i = 0; i < jsonNotes.length; i++) {
            
            if(reqParamsNum === jsonNotes[i].id) {
                jsonNotes.splice(i, 1)
            }
        }
        res.json(jsonNotes)
    })};

// db test data: [{"title":"Note Title","text":"Note", "id" : 0}]