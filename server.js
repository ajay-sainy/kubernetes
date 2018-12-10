'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

var publicDir = require('path').join(__dirname,'/');
app.use(express.static(publicDir));

app.get('/', (req, res) => {
	var os = require( 'os' );

	var networkInterfaces = os.networkInterfaces( );

	var msg = networkInterfaces['eth0'][0]['address'];
	var html = '<html><head></head><body style="background-color: cadetblue;text-align: center;padding-top: 100px;"><img src="/HastyBrilliantHoiho-size_restricted.gif"></img><h1>Oh, this demo works :)</br>This page is being served from - <span style="color:red">'+msg+'</span></h1></body></html>'

  	res.send(html);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
