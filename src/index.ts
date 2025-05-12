// index.ts
import dotenv from 'dotenv';
import { app } from './app.js'; // Import the app without starting the server

dotenv.config();

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'test') {
  // Only start the server if it's not in the test environment
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}
