const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/firstweb", {
   
   
    
})
    .then(() => {
        console.log("Connected to MongoDB successfully!");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });
