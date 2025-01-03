//const express = require("express");
//const cors = require("cors");
//const app = express();
//
//app.use(cors());
//app.use(express.json());
//
//app.get("/message", (req, res) => {
//  res.json({ message: "Hello, world!" });
//});
//
//app.listen(8000, () => {
//  console.log(`Server is running on port 8000.`);
//});
// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Отдача статических файлов из папки build
app.use(express.static(path.join(__dirname, 'build')));

// Обработка всех остальных запросов
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
