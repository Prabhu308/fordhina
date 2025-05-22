const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<H1 style="color:red">Hello, World!</H1>');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app; // Export for testing
