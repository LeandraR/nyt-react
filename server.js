const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const axios = require("axios");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//when on production (heroku in this case), or company server
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// Add routes, both API and view
// app.use(routes);

axios.get('https://api.github.com/search/repositories?q=' + "shopify" + '&sort=stars&order=desc/releases/latest')
    .then(function (response) {
        for (let i = 0; i<10; i++){
            // let owner = response.data.items[i].owner.login;
            let repo = response.data.items[i].full_name;
            // console.log(`# ${[i+1]}. owner is: ${owner}`);
            console.log(repo);
            // console.log(response.data.items[i]);
            // console.log(`this is the name ${response.data.items[i].name}`);
            // console.log(`Repo name: ${repo}`);
            let language = response.data.items[i].language;
            console.log(language);
            // console.log(response.data.items[i].url);
            // console.log(response.data.items[i].releases_url);

            axios.get(`https://api.github.com/repos/${repo}/releases/latest`)
                .then(function (res) {
                    console.log(res.data.tag_name);
                })
                .catch(error => {
                    // console.log(error.response);
                    console.log("version not found");
                });

            //TODO: in react, do 'if response, render response, else render '-'

            // axios.get(`https://api.github.com/repos/nozzlegear/ShopifySharp/releases/latest`)
            //     .then(function (res) {
            //         console.log('queried');
            //         console.log(res.data.tag_name);
            //     });

            // ex.: { user: 'Your User'}
            // console.log(response.status); // ex.: 200
        }

    })
    .catch(error => {
        // console.log(error.response);
        console.log("serach not found");
    });;


// axios.get('https://api.github.com/search/respositories/?q=' + "javascript" + "+language:assembly&sort=stars&order=desc")
//     .then(function (response) {
//         console.log(response.data); // ex.: { user: 'Your User'}
//         console.log(response.status); // ex.: 200
//     });

// eee0ac5e568c9573a29451b1035a803837e8ea91;

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact");

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});