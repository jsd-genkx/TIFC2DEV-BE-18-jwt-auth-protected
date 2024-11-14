
# Express JWT Authentication Example

This is a basic example of an Express.js application that demonstrates user registration, login, and protected routes using JSON Web Tokens (JWT) for authentication.

## Features

- User registration with password hashing using `bcryptjs`
- User login with JWT generation
- Protected routes that require a valid JWT to access

## Installation

1. Clone the repository:
    ```sh
    cd jwt-auth-protected
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the server:
    ```sh
    npm start
    ```

## Endpoints

### Registration

- **URL:** `/api/v1/auth/register`
- **Method:** `POST`
- **Body:**
    ```json
    {
        "username": "your_username",
        "password": "your_password"
    }
    ```
- **Success Response:**
    - **Code:** 201
    - **Content:** `User registered successfully`
- **Error Response:**
    - **Code:** 500
    - **Content:** `{ message: 'Error registering user' }`

### Login

- **URL:** `/api/v1/auth/login`
- **Method:** `POST`
- **Body:**
    ```json
    {
        "username": "your_username",
        "password": "your_password"
    }
    ```
- **Success Response:**
    - **Code:** 200
    - **Content:** `{ token: "your_jwt_token" }`
- **Error Response:**
    - **Code:** 401
    - **Content:** `{ message: 'Invalid credentials' }`
    - **Code:** 500
    - **Content:** `{ message: 'Error logging in user' }`

### Protected Route

- **URL:** `/protected`
- **Method:** `GET`
- **Headers:**
    - `Authorization: Bearer your_jwt_token`
- **Success Response:**
    - **Code:** 200
    - **Content:** `{ message: "This is a protected route", user: { "username": "your_username" } }`
- **Error Response:**
    - **Code:** 401
    - **Content:** `Unauthorized`
    - **Code:** 403
    - **Content:** `Forbidden`

