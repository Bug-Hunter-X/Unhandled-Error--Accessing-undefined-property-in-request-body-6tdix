const express = require('express');
const app = express();
app.use(express.json());
app.post('/user', (req, res) => {
  const user = req.body;
  // Check if the request body is valid and contains required properties
  if (!user || !user.name) {
    return res.status(400).json({ error: 'Missing or invalid user data' });
  }
  console.log(user.name); 
  res.status(201).json({ message: 'User created', user });
});
app.listen(3000, () => console.log('Server listening on port 3000'));