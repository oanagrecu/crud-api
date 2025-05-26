import request from 'supertest';
import { app, server } from '../app'; 

describe('User API', () => {
  let createdUserId: string;

  it('should return an empty array when no users exist', async () => {
    const response = await request(app).get('/api/users');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });

  it('should create a new user and return the created record', async () => {
    const newUser = {
      username: 'John Doe',
      age: 30,
      hobbies: ['reading', 'gaming'],
    };

    const response = await request(app).post('/api/users').send(newUser);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.username).toBe(newUser.username);
    expect(response.body.age).toBe(newUser.age);
    expect(response.body.hobbies).toEqual(newUser.hobbies);

    createdUserId = response.body.id;
  });

  it('should return the created user by ID', async () => {
    const response = await request(app).get(`/api/users/${createdUserId}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id', createdUserId);
    expect(response.body.username).toBe('John Doe');
  });

  it('should update the created user and return the updated record', async () => {
    const updatedUser = {
      username: 'Jane Doe',
      age: 28,
      hobbies: ['hiking'],
    };

    const response = await request(app)
      .put(`/api/users/${createdUserId}`)
      .send(updatedUser);

    expect(response.status).toBe(200);
    expect(response.body.username).toBe(updatedUser.username);
    expect(response.body.age).toBe(updatedUser.age);
    expect(response.body.hobbies).toEqual(updatedUser.hobbies);
  });

  it('should delete the created user and return no content', async () => {
    const response = await request(app).delete(`/api/users/${createdUserId}`);
    expect(response.status).toBe(204); // No Content
    expect(response.body).toEqual({});
  });

  afterAll(() => {
    server.close();
  });
});
