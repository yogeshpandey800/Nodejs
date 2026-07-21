let express = require("express");
let app = express();
let dotenv = require('dotenv');
dotenv.config()
let port = process.env.PORT || 6700;

app.get('/', (req, res) => {
    res.send('Hi from Express');
})

app.get('/test', (req, res) => {
    res.send('test route');
})

app.listen(port, (err) => {
    if(err) throw err;
    else{
        console.log(`Server is running on port ${port}`);
    }
});