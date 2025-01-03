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
