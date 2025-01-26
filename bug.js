const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database query to find user by id ...
  if (!user) {
    return res.status(404).send('User not found'); // Correct error handling
  }
  res.json(user);
});
app.get('/users', (req, res) => {
  // ... some database query to fetch all users ... 
  if(users.length ===0){
    return res.status(204).send('No users found'); //This is the bug, it should be 404
  }else{
    res.json(users);
  }
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));