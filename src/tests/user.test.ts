// import request from 'supertest';
// import { app, server } from '../app'; 
//import { UserModel } from '../models/user.model'; 
// describe('User API', () => {
//   let createdUserId: string;

//   // Test scenario 1: Get all records (empty array expected)
//   it('should return an empty array when no users exist', async () => {
//     const response = await request(app).get('/api/users');
//     expect(response.status).toBe(200);
//     expect(response.body).toEqual([]);
//   });

//   // Test scenario 2: Create a new user (POST)
//   it('should create a new user and return the created record', async () => {
//     );
//   });
  

//   // Test scenario 3: Get the created user by its ID (GET)
//   it('should return the created user by ID', async () => {
//     const response = await request(app).get(`/api/users/${createdUserId}`);
//     expect(response.status).toBe(200);
//     expect(response.body).toHaveProperty('id', createdUserId);
//     expect(response.body.name).toBe('John Doe');
//     expect(response.body.email).toBe('john.doe@example.com');
//   });

//   // Test scenario 4: Update the created user (PUT)
//   it('should update the created user and return the updated record', async () => {
//     const updatedUser = { name: 'John Doe Updated', email: 'john.updated@example.com' };
//     const response = await request(app).put(`/api/users/${createdUserId}`).send(updatedUser);
//     expect(response.status).toBe(200);
//     expect(response.body).toHaveProperty('id', createdUserId);
//     expect(response.body.name).toBe(updatedUser.name);
//     expect(response.body.email).toBe(updatedUser.email);
//   });

//   // Test scenario 5: Delete the created user (DELETE)
//   it('should delete the created user and return a success message', async () => {
//     const response = await request(app).delete(`/api/users/${createdUserId}`);
//     expect(response.status).toBe(200);
//     expect(response.body).toHaveProperty('message', 'User deleted successfully');
//   });

//   // Test scenario 6: Try to get the deleted user by ID (GET after DELETE)
//   it('should return 404 when trying to get a deleted user', async () => {
//     const response = await request(app).get(`/api/users/${createdUserId}`);
//     expect(response.status).toBe(404);
//     expect(response.body).toHaveProperty('message', 'User not found');
//   });

//   afterAll(() => {
//     server.close(); 
//   });
// });
