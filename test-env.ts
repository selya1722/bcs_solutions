import { config } from 'dotenv';

config();

console.log('EMAIL_USER:', process.env.EMAIL_USER || 'Not set');
console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? 'Set (hidden)' : 'Not set');