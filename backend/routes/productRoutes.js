const express = require('express');
const base = require('../airtableConfig');

const router = express.Router();

// Fetch all products
router.get('/products', async (req, res) => {
    try {
        const records = await base('Products').select().all();
        const products = records.map(record => ({
            id: record.id,
            ...record.fields
        }));
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' });
    }
});

// Fetch a product by ID
router.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const record = await base('Products').find(id);
        res.json({
            id: record.id,
            ...record.fields
        });
    } catch (error) {
        res.status(404).json({ error: 'Product not found' });
    }
});

module.exports = router;
