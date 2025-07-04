const express = require('express');
const cors = require('cors');
const { createClient } = require('redis');

const app = express();
app.use(cors());

// Connect to Redis using REDIS_URL env var (default to localhost if missing)
const redisClient = createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379'
});

redisClient.connect().catch(console.error);

app.get('/text', async (req, res) => {
  try {
    const value = await redisClient.get('text');
    res.json({ text: value || 'No value set in Redis' });
  } catch (error) {
    console.error('Redis error:', error);
    res.status(500).json({ error: 'Failed to fetch from Redis' });
  }
});

app.listen(4000, () => {
  console.log('API server running on http://localhost:4000');
});