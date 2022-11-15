require("dotenv").config();
const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");
const { handleCORS } = require("./utils/customMiddeware");

const app = express();
app.use(
  "/static",
  express.static(path.join(__dirname, "client/build/static/"))
);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Handle CORS
/* app.use((req, res, next) => {
  handleCORS(req, res, next);
}); */

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.post("/message", async (req, res) => {
  console.log("received message request:", req.body);
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: `${process.env.GOOGLE_APP_EMAIL}`,
      pass: `${process.env.GOOGLE_APP_PASSWORD}`,
    },
  });
  // Try sending verification email to client
  try {
    let info = await transporter.sendMail({
      from: req.body.email,
      to: "torin.olat@gmail.com",
      subject: "Message From Heliosite ",
      text: req.body.message,
    });
  } catch (e) {
    console.log(e);
    res.send({ error: e });
  }

  res.send({ success: true });
});

app.get("*", (req, res) => {
  res.send("no path matched");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
