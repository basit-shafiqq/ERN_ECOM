const express = require('express');
const router = express.Router();

// Sample cart data (in-memory for now)
let cart = [];

// Add item to cart
router.post('/cart', (req, res) => {
    const { item } = req.body;
    cart.push(item);
    res.status(201).json({ message: 'Item added to cart', cart });
});

// Get cart items
router.get('/cart', (req, res) => {
    res.json(cart);
});

// Remove item from cart
router.delete('/cart/:id', (req, res) => {
    const { id } = req.params;
    cart = cart.filter(item => item.id !== id);
    res.json({ message: 'Item removed from cart', cart });
});

module.exports = router;
