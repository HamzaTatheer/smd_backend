const express = require("express");
const bodyParser = require('body-parser');

const Problems = require("./Problems");
const app = express();

let problems = new Problems();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/getAllProblems", (req, res) => {
    res.send(problems.getAllProblems());
});

app.get("/getProblemPosts", (req, res) => {
    let problem = req.query.problem;
    res.send(problems.getPostsOfProblem(problem));
});

app.post("/createPostForProblem", (req, res) => {
    let problem = req.body.problem;
    let question = req.body.question;
    let answer = req.body.answer;
    problems.addPostToProblem(problem,question,answer);
    res.send("done");
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));