const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '7507',
    database: 'book',
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    
   
});

app.get("/books", (req, res)=>{
    const sqlSelect = "SELECT * FROM books";
    db.query(sqlSelect, (err, result) => {
        res.send(result);

        if (err) console.log(err);
    });
})

app.post("/books", (req, res) => {
const q = "INSERT INTO books (Tittle, Descr, Cover);";
const values = [
    req.body.Tittle,
    req.body.Descr,
    req.body.Covers
    
];
 db.query(q, [values], (err, data)=>{
        if (err) console.log(err);
        return res.json("Book added");
 })
})


app.listen(5000, () => {
    console.log('Listening on port 5000');
})