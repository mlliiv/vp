const express = require('express');

// käivitan express.js funktsiooni ja anna nimeks "app"

const app = express();

app.get("/", (req, res)=>{
	res.send('express.js läks käima ja serveerib meile veebi');
}

app.listen(5020);