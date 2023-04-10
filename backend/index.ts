import express from "express";

const app = express();

const port = 3001;

app.get("/", (req, res) => {
    res.send("Default");
});

app.get("/health_check", (req, res) => {
    res.send("Success!");
});

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
})