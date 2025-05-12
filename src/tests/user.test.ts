// // /tests/user.test.ts
// import request from 'supertest';
// import {app} from '../src/app';

// describe('User API', () => {
//   let createdUserId: string;

//   test('GET /api/users returns an empty array', async () => {
//     const response = await request(app).get('/api/users');
//     expect(response.status).toBe(200);
//     expect(response.body).toEqual([]);
//   });

//   test('POST /api/users creates a user', async () => {
//     const userData = {
//       username: 'John Doe',
//       age: 30,
//       hobbies: ['Reading', 'Coding']
//     };
//     const response = await request(app).post('/api/users').send(userData);
//     expect(response.status).toBe(201);
//     expect(response.body.username).toBe(userData.username);
//     createdUserId = response.body.id;
//   });

//   test('GET /api/users/{id} returns the created user', async () => {
//     const response = await request(app).get(`/api/users/${createdUserId}`);
//     expect(response.status).toBe(200);
//     expect(response.body.id).toBe(createdUserId);
//   });
// });
