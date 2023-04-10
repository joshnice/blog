import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Default");
});

app.get("/health_check", (req, res) => {
    res.send("Success!");
});

app.listen(3001, () => {
    console.log("Now listening");
})