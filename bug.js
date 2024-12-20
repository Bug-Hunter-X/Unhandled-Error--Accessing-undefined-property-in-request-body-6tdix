const express = require('express');
const app = express();
app.use(express.json());
app.post('/user', (req, res) => {
  const user = req.body;
  // Missing error handling if 'user' is undefined or missing properties
  console.log(user.name); //This line may throw an error if user.name is undefined
  res.send('User created');
});
app.listen(3000, () => console.log('Server listening on port 3000'));