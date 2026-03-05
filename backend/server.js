// Butta Bomma Sarees & Collection — Backend (Node.js / Express)
// ══════════════════════════════════════════════════════════════
// This is a starter backend template.
// To run: npm install && node server.js

const express = require('express');
const cors    = require('cors');
const app     = express();
const PORT    = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('../frontend')); // serve frontend files

// ── PRODUCTS API ──
app.get('/api/products', (req, res) => {
  // TODO: Connect to MongoDB / Firebase and return real products
  res.json({ message: 'Products API — connect your database here' });
});

// ── ORDERS API ──
app.post('/api/orders', (req, res) => {
  const order = req.body;
  // TODO: Save order to database, send confirmation email
  res.json({ success: true, orderId: 'BB-' + Date.now() });
});

// ── AUTH API ──
app.post('/api/auth/signup', (req, res) => {
  // TODO: Hash password, save user to database
  res.json({ message: 'Signup endpoint — add your auth logic here' });
});

app.post('/api/auth/login', (req, res) => {
  // TODO: Verify credentials, return JWT token
  res.json({ message: 'Login endpoint — add your auth logic here' });
});

// ── CONTACT API ──
app.post('/api/contact', (req, res) => {
  // TODO: Send email using Nodemailer / SendGrid
  res.json({ success: true, message: 'Message received' });
});

app.listen(PORT, () => {
  console.log(`Butta Bomma server running on http://localhost:${PORT}`);
});
