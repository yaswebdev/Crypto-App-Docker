const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

const API_URL = 'https://pro-api.coinmarketcap.com/v1';
const API_KEY = '0abc141f-318c-4807-9c4b-38d3133ff363'; // Replace with your valid API key

// Middleware
app.use(cors());
app.use(express.json());

// Route to fetch coin list
app.get('/api/cryptos', async (req, res) => {
    try {
        const response = await axios.get(`${API_URL}/cryptocurrency/listings/latest`, {
            headers: { 'X-CMC_PRO_API_KEY': API_KEY },
            params: {
                start: 1,
                limit: 10,
                convert: 'USD',
            },
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching cryptos:', error.message);
        res.status(500).json({ error: 'Failed to fetch cryptos' });
    }
});

// Route to fetch specific coin details
app.get('/api/coin/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const response = await axios.get(`${API_URL}/cryptocurrency/info`, {
            headers: { 'X-CMC_PRO_API_KEY': API_KEY },
            params: { id },
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching coin details:', error.message);
        res.status(500).json({ error: 'Failed to fetch coin details' });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Proxy server running at http://localhost:${PORT}`);
});
