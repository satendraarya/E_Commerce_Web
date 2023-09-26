const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/user-routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use("/api", router);
mongoose
  .connect(
    `mongodb+srv://satendraarya:${process.env.MONGODB_PASSWORORD}@cluster0.vzrovi2.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(8080);
    console.log("Database is connected! Listening to localhost 8080");
  })
  .catch((err) => console.log(err));



// const express = require("express");
// const mongoose = require("mongoose");
// const router = require("./routes/user-routes");
// const cookieParser = require('cookie-parser');
// const cors = require('cors');
// // require("dotenv").config ();


// const app = express();

// app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
// app.use(cookieParser());
// app.use(express.json());
// app.use("/api", router);

// mongoose.connect("mongodb+srv://satendraaaya:Satendraarya123@cluster0.ffnuhjy.mongodb.net/?retryWrites=true&w=majority")
// .then(() => {
//     app.listen(5050);
//     console.log("Database is connected! lestening to localhost 5050");
    
// }).catch((err)=>console.log(err));




// userName:- satendraarya
// password:- Satendraarya1234
//MongoDB URL:- mongodb+srv://satendraarya:<password>@cluster0.vzrovi2.mongodb.net/?retryWrites=true&w=majority

// Now Mongodb Project Name:- E-Comm-Web