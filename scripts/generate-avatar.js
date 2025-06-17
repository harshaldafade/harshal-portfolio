const fs = require('fs');
const { createCanvas } = require('canvas');

// Create a 512x512 canvas
const canvas = createCanvas(512, 512);
const ctx = canvas.getContext('2d');

// Create gradient background
const gradient = ctx.createLinearGradient(0, 0, 512, 512);
gradient.addColorStop(0, '#9333ea'); // Purple
gradient.addColorStop(1, '#2563eb'); // Blue

// Fill background
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 512, 512);

// Add some geometric shapes for visual interest
ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
ctx.beginPath();
ctx.arc(256, 256, 200, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
ctx.beginPath();
ctx.moveTo(256, 56);
ctx.lineTo(456, 456);
ctx.lineTo(56, 456);
ctx.closePath();
ctx.fill();

// Save the image
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('public/avatar.png', buffer);

console.log('Avatar generated successfully!'); 