const express = require("express");
const app = express();

// get_client_files_db
const db = require("./models");

db.sequelize.sync().then( () => {
    app.listen( 3001 , () => {
        console.log(" HELLO WORLD ! ");
    });
});
