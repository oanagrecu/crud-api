
# User API - Simple CRUD Application

This project implements a simple CRUD API with load balancing using Node.js. The API allows you to perform basic operations like creating, reading, updating, and deleting users. The application also demonstrates horizontal scaling with the Node.js Cluster API and round-robin load balancing across multiple worker processes.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
  - [Development Mode (With Nodemon)](#1-development-mode-with-nodemon)
  - [Production Mode](#2-production-mode)
  - [Multi-Instance Mode (Horizontal Scaling with Node.js Cluster API)](#3-multi-instance-mode-horizontal-scaling-with-nodejs-cluster-api)
- [API Endpoints](#api-endpoints)
  - [GET /api/users](#1-get-apiusers)
  - [POST /api/users](#2-post-apiusers)
  - [GET /api/users/{id}](#3-get-apiusersid)
  - [PUT /api/users/{id}](#4-put-apiusersid)
  - [DELETE /api/users/{id}](#5-delete-apiusersid)
- [Testing](#testing)
- [Horizontal Scaling (Cluster Mode)](#horizontal-scaling-cluster-mode)
- [License](#license)

---

## Prerequisites

Before you start, ensure you have the following installed:

- Node.js (version 22.x.x or higher)
- npm
- TypeScript
- Jest (for testing)

---

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/oanagrecu/crud-api.git
    ```

2. Navigate to the project folder:

    ```bash
    cd user-api
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

---

## Running the Application

### 1. Development Mode (With Nodemon)

In development mode, the application will automatically restart when you make changes to your TypeScript files.

To run the application in development mode:

```bash
npm run start:dev
```
This command uses nodemon with ts-node to run the application.

### 2. Production Mode

1. Start the application:

    ```bash
    npm run start:prod
    ```

In production mode, the TypeScript code is compiled, and the application is run as a bundled JavaScript file.

### 3. Multi-Instance Mode (Horizontal Scaling with Node.js Cluster API)
To start multiple instances of your application (workers) and enable load balancing:

```bash
npm run start:multi
```

This command starts the master process, which spawns multiple worker processes (one for each available CPU core). Requests are distributed across workers using round-robin load balancing.

---

## API Endpoints using POSTMAN

### 1. GET http://localhost:4000/api/users/  
Retrieve all users.

**Request:**

```bash
GET /api/users
```

**Response:**

- **Status**: 200 OK
- **Body**: An array of user objects (empty array if no users).

### 2. POST http://localhost:4000/api/users/  
Create a new user.

**Request:**

```bash
POST /api/users
```

**Body:**

```json
{
  "username": "JohnDoe",
  "age": 30,
  "hobbies": ["reading", "swimming"]
}
```

**Response:**

- **Status**: 201 Created
- **Body**: The created user object, including a generated id.

### 3. GET http://localhost:4000/api/users/{id}  
Retrieve a user by their unique ID.

**Request:**

```bash
GET /api/users/{id}
```

**Response:**

- **Status**: 200 OK
- **Body**: The user object.

### 4. PUT http://localhost:4000/api/users/{id}  
Update a user by their unique ID.

**Request:**

```bash
PUT /api/users/{id}
```

**Body:**

```json
{
  "username": "JohnUpdated",
  "age": 35,
  "hobbies": ["reading", "traveling"]
}
```

**Response:**

- **Status**: 200 OK
- **Body**: The updated user object.

### 5. DELETE http://localhost:4000/api/users/{id}  
Delete a user by their unique ID.

**Request:**

```bash
DELETE /api/users/{id}
```

**Response:**

- **Status**: 200 OK
- **Body**: A confirmation message.

---

## Testing

The application includes basic tests for the CRUD operations.

To run the tests:

1. Make sure you have installed all dependencies.
2. Run the following command:

    ```bash
    npm run test
    ```

The test suite includes:

- Testing the `GET /api/users` route (expecting an empty array if no users are created).
- Testing the `POST /api/users` route (creating a new user).
- Testing the `GET /api/users/{id}` route (retrieving the created user).
- Testing the `PUT /api/users/{id}` route (updating the user).
- Testing the `DELETE /api/users/{id}` route (deleting the user).


---

## Horizontal Scaling (Cluster Mode)

To enable **horizontal scaling**, follow these steps:

1. Run the application in multi-instance mode:

    ```bash
    npm run start:multi
    ```

2. The load balancer will listen for requests on `localhost:4000/api`. Requests will be distributed across the worker processes running on ports `4001`, `4002`, `4003`, etc.

3. Test the load balancing by sending requests to `localhost:4000/api`, and you will see responses from different worker processes.

---

