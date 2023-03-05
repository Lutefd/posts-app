const express = require('express');
const bodyParser = require('body-parser');

const { getStoredPosts, storePosts } = require('./data/posts');
const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.get('/posts', async (req, res) => {
  const storedPosts = await getStoredPosts();
  res.json({ posts: storedPosts });
});
