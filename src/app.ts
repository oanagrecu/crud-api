import express from 'express';
import { getUsers, getUserById, createUser, updateUser, deleteUser } from './controllers/user.controller';

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json()); 


app.get('/api/users', getUsers);             
app.get('/api/users/:userId', getUserById); 
app.post('/api/users', createUser);         
app.put('/api/users/:userId', updateUser);  
app.delete('/api/users/:userId', deleteUser); 


app.use((req, res) => {
  res.status(404).json({ message: 'Resource not found' });
});


app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Internal Server Error:', err);
  res.status(500).json({ message: 'Internal server error' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
export { app };