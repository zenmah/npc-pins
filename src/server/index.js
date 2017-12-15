const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/npc');

var http = require('http');
var https = require('https');
var fs = require('fs');


const publicweb = './publicweb';
var sslOptions = {
  key: fs.readFileSync('./dist/cert/keytmp.pem'),
 cert: fs.readFileSync('./dist/cert/cert.pem'),
  passphrase: 'sslpass'
};

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(publicweb));
console.log(`serving ${publicweb}`);

app.use('/api', routes)

app.get('*', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.sendFile(`index.html`, { root: publicweb });
});

const port = process.env.PORT || '3001';


var httpServer = http.createServer(app);
var httpsServer = https.createServer(sslOptions, app);

//httpServer.listen(port, () => console.log(`httpServer: API running on localhost:${port}`));
httpsServer.listen(port, () => console.log(`httpsServer: API running on localhost:${port}`));
