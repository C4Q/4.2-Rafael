const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.send(homepage);
});

app.get('/upper/:str', (req, res) => {
  str = req.params.str
  obj = {"oldStr": str, "result": str.toUpperCase()}
  res.send(obj)
});

app.get('/lower/:str', (req, res) => {
  str = req.params.str
  obj = {"oldStr": str, "result": str.toLowerCase()}
  res.send(obj)
});

app.get('/length/:str', (req, res) => {
  str = req.params.str
  obj = {"oldStr": str, "result": str.length}
  res.send(obj)
});

app.get('/reverse/:str', (req, res) => {
  str = req.params.str
  obj = {"oldStr": str, "result": str.split("").reverse().join("")}
  res.send(obj)
});

app.listen(port, () => {
  console.log(`running on port ${port}`);
});

const homepage = `
<html>
  <head>
    <title>Mid Program String Modifier</title>
    <link href="app.css"
          type="text/css" rel="stylesheet">
    <link rel="icon" type="image/x-icon"
          href="favicon.ico">
    <link href="https://fonts.googleapis.com/css?family=Itim" rel="stylesheet">
    <script src="app.js"></script>
    </head>
  <body>
    <h1>Mid Program String Modifier</h1>
    <input id="inputstr" type="text" name="string"
           placeholder="type a string">
    <p id="modP">modified strong goes here</p>
    <button id="up">Upper</button>
    <button id="lo">Lower</button>
    <button id="le">Length</button>
    <button id="re">Reverse</button>
  </body>
</html>
`;
