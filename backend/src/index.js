const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const multer = require("multer");
const { initializeApp } = require("firebase/app");
const authController = require("./controllers/authController");
const firebaseConfig = require("./config/firebase-config");
initializeApp(firebaseConfig);
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const app = express();
const port = 4000;


const mongoURI =
"mongodb+srv://12212109:KMBuWRcN9qIz3IVJ@cluster0.z5bscph.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    socketTimeoutMS: 30000,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((error) =>
    console.error("MongoDB connection error:", error)
  );

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '500mb' }));
app.use(express.static(path.join(__dirname, "public")));

app.post("/signup", authController.signup);
app.post('/signup', authController.signup);
app.post('/login', authController.login);
app.post('/logout', authController.logout);


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
  });
  
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
  