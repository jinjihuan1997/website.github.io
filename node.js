const express = require('express');
const app = express();
app.use(express.json());

app.post('/submit-form', (req, res) => {
    const { name, email } = req.body;
    // 在这里，您可以将数据保存到数据库
    console.log(name, email);
    res.send('数据已接收');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`服务器运行在 http://localhost:${PORT}`);
});
