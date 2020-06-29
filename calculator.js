const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// This is the special one that we use when we're tying to parse data that comes from an HTML form
app.use(bodyParser.urlencoded( { extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", (req, res) => {

    console.log(req.body)
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);

    const result = num1 + num2;

    res.send("Thanks for posting that!" + result);
});

app.get('/bmicalculator', (req, res) => {
    res.sendFile(__dirname + "/bmicalculator.html");
});
app.post('/bmicalculator', (req, res) => {
    const weight = req.body.weight;
    const height = req.body.height;
    let imc;

    if(req.body.bmi === "standard"){
        imc = 703 * (weight / (height * height));
    } else {
        imc = (weight / (height * height));
    }

    res.send("Your BMI is " + Math.round(imc));
})

app.listen(3000, () => {
    console.log('Server running on port 3000');
    
})