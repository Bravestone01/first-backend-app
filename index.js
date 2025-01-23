require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT

const githubData ={
    "login": "Bravestone01",
    "id": 65286465,
    "node_id": "MDQ6VXNlcjY1Mjg2NDY1",
    "avatar_url": "https://avatars.githubusercontent.com/u/65286465?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Bravestone01",
    "html_url": "https://github.com/Bravestone01",
    "followers_url": "https://api.github.com/users/Bravestone01/followers",
    "following_url": "https://api.github.com/users/Bravestone01/following{/other_user}",
    "gists_url": "https://api.github.com/users/Bravestone01/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Bravestone01/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Bravestone01/subscriptions",
    "organizations_url": "https://api.github.com/users/Bravestone01/orgs",
    "repos_url": "https://api.github.com/users/Bravestone01/repos",
    "events_url": "https://api.github.com/users/Bravestone01/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Bravestone01/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Ghulam Mujtaba Shah",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": " App developer with a passion for creating seamless digital experiences. Let's code and innovate together!",
    "twitter_username": null,
    "public_repos": 32,
    "public_gists": 0,
    "followers": 1,
    "following": 2,
    "created_at": "2020-05-13T10:53:28Z",
    "updated_at": "2025-01-20T16:09:04Z"
  }

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get ("/twitter", (req, res) => {
    res.send("mujtaba shah");
})

app.get ("/login", (req, res) => {
    res.send("<h1>please login </h1>");
})
app.get("/github", (req, res) => {
    res.json(githubData);
})

app.listen(PORT, () => {
    console.log(`Example app listening at${PORT}`);
});