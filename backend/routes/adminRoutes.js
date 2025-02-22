const express = require('express');
const base = require('../airtableConfig');
const router = express.Router();

// Admin: Fetch all products
router.get('/admin/products', async (req, res) => {
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

// Admin: Add a new product
router.post('/admin/products', async (req, res) => {
    const { name, image, old_price, new_price } = req.body;
    try {
        const createdRecord = await base('Products').create([{ fields: { name, image, old_price, new_price } }]);
        res.status(201).json({ id: createdRecord[0].id, ...createdRecord[0].fields });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create product' });
    }
});

module.exports = router;
