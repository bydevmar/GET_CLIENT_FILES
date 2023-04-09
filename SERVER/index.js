const express = require("express");
const app = express();
const db = require("./models");
const user_routes = require("./routes/Utilisateur");

const port = 3001 || process.env.PORT
app.listen(port, () => {
    console.log(`app connected to ${port}`);
});

const routes = [
    user_routes,
];


db.sequelize.sync().then(() => {
    app.use(routes);
});

