const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()
const port = 3000

let businesses = [{
    "phone": "4144254069",
    "address": "229 E Wisconsin Avenue",
    "name": "Brilliance Business Solutions",
    "member_since": "2014",
    "county": "Milwaukee",
    "business_type": "Agency",
},
{
    "phone": "2628213999",
    "address": "N8 W22323 Johnson Drive",
    "name": "Saturn Lounge",
    "member_since": "2019",
    "county": "Waukesha",
    "business_type": "Agency",
},
{
    "phone": "4144362200",
    "address": "316 N Milwaukee Avenue",
    "name": "Granular",
    "member_since": "2018",
    "county": "Milwaukee",
    "business_type": "Agency",
}];

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/business', (req, res) => {
    const business = req.body;

    // output the business to the console for debugging
    console.log(business);
    businesses.push(business);

    res.send('Entry has been added to the database');
});

app.get('/business', (req, res) => {
    res.json(businesses);
});

app.get('/business/:phone', (req, res) => {
    // reading phone from the URL
    const phone = req.params.phone;

    // searching businesses for the phone
    for (let business of businesses) {
        if (business.phone === phone) {
            res.json(business);
            return;
        }
    }

    // sending 404 when not found something is a good practice
    res.status(404).send('Business not found');
});

app.delete('/business/:phone', (req, res) => {
    // reading phone from the URL
    const phone = req.params.phone;

    // remove item from the businesses array
    business = businesses.filter(i => {
        if (i.phone !== phone) {
            return true;
        }

        return false;
    });

    res.send('Entry not found');
});

app.post('/business/:phone', (req, res) => {
    // reading phone from the URL
    const phone = req.params.phone;
    const newBusiness = req.body;

    // remove item from the businesses array
    for (let i = 0; i < businesses.length; i++) {
        let business = businesses[i]

        if (business.phone === phone) {
            businesses[i] = newBusiness;
        }
    }

//404
    res.send('Entry has been edited');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));