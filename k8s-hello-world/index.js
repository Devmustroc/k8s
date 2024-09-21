import express from "express";
import os from "os";


const app = express();


app.get('/', (req, res) => {
    const helloMessage = `Hello World! from ${os.hostname()}`;
    console.log(helloMessage);
    res.send(helloMessage);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});