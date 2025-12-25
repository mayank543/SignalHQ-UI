const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// API Routes
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'SignalsHQ Backend Operational' });
});

app.post('/api/contact', (req, res) => {
    // Mock email service
    const { email } = req.body;
    console.log(`Contact request received for: ${email}`);
    res.json({ success: true, message: "We'll be in touch soon!" });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
