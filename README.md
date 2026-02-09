# Node.js User Management API

A REST API built with Node.js, Express, and MongoDB for user registration and management.

## Features

- User registration and authentication
- CRUD operations for user data
- Search users by name
- MongoDB integration
- Environment-based configuration

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas connection string)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd vsnod
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Configure your MongoDB connection in `.env`:
```
MONGO_URI=mongodb://localhost:27017/MyDB
PORT=3000
```

## Running the Server

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

Server will run on `http://localhost:3000`

## API Endpoints

### Users
- `POST /api/users` - Create a new user
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `GET /api/users/UserName/:UserName` - Get user by username
- `GET /api/users/contains/:UserName` - Search users by name
- `PUT /api/users/:id` - Update user

## API Request/Response Examples

### Create User
```bash
POST /api/users
Content-Type: application/json

{
  "UserName": "john_doe",
  "MobileNo": "9876543210",
  "Email": "john@example.com",
  "Password": "secure_password",
  "Address": "123 Main St",
  "City_Village": "New York"
}
```

### Get All Users
```bash
GET /api/users
```

## Project Structure

```
.
├── controllers/       # Request handlers
├── models/           # MongoDB schemas
├── routes/           # API routes
├── src/
│   └── config/
│       └── db.js     # Database connection
├── ServiceLayer/     # Business logic
├── server.js         # Entry point
├── package.json      # Dependencies
└── README.md         # This file
```

## Testing with Maui App

The API is ready to be consumed by your Maui application. Use the base URL:

```
http://localhost:3000/api
```

For production deployment, update the base URL accordingly.

### CORS Configuration (if needed)

If your Maui app is on a different origin, enable CORS in `server.js`:

```javascript
const cors = require('cors');
app.use(cors());
```

Then install cors:
```bash
npm install cors
```

## Database Configuration

The application uses MongoDB. Configure your connection:

- **Local MongoDB**: Use connection string in `.env`
- **MongoDB Atlas**: Update MONGO_URI with your Atlas connection string

## Troubleshooting

- **MongoDB Connection Failed**: Ensure MongoDB is running and the connection string is correct
- **Port Already in Use**: Change the `PORT` in `.env` to an available port
- **Module Not Found**: Run `npm install` to ensure all dependencies are installed

## License

Your License Here

## Contact

For questions or issues, contact the development team.
