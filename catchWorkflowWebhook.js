// Import express framework
const express = require('express');
const app = express();

// Middleware để xử lý request có body là JSON
app.use(express.json());

// Định nghĩa endpoint cho webhook
app.post('/webhook', (req, res) => {
    // Dữ liệu nhận được từ webhook
    const data = req.body;
    
    // In dữ liệu ra console để kiểm tra
    console.log('Webhook received:', data);

    // Xử lý dữ liệu webhook nhận được từ Vtiger
    const productName = data.produc_name;

    // Ví dụ xử lý: in thông tin Lead ra
    console.log(`Product: ${productName}`);

    // Bạn có thể thêm các xử lý khác như lưu vào database, gọi API khác, v.v.

    // Gửi phản hồi về cho Vtiger
    res.status(200).send('Webhook received successfully.');
});

// Khởi động server trên cổng 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Webhook server is running on port ${PORT}`);
});