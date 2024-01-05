const express = require("express");
const path = require("path");
const hbs = require("hbs");
require("./db/conn");
const User = require("./models/usermessage");

const app = express();
const port = process.env.PORT || 3000;

// Paths setup
const staticPath = path.join(__dirname, "../public");
const templatesPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Middleware

app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")));
app.use(express.urlencoded({extended:false}))
app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set("views", templatesPath);
hbs.registerPartials(partialsPath);

// Routes
app.get("/", (req, res) => {
    res.render("index");
});


app.post("/contact", async(req,res) =>
{
    try{
       const userdata = new User(req.body);
    await Userdata.save();
       res.status(201).render("index");
    }
    catch(error){
        res.status(500).send(error);
    }

})
// Server creation with error handling
app.listen(port, (error) => {
    if (error) {
        console.error("Server could not start:", error);
    } else {
        console.log(`Server is running on port ${port}`);
    }
});