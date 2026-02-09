# Maui App Integration Guide

## Quick Start for Maui Developers

This API is ready to be integrated with your .NET Maui application.

## Base URL

```
http://localhost:3000/api
```

## Complete Endpoint Reference

### User Endpoints

#### 1. Create User
```http
POST /api/users
Content-Type: application/json

{
  "UserName": "john_doe",
  "MobileNo": "9876543210",
  "Email": "john@example.com",
  "Password": "secure_password",
  "Address": "123 Main St",
  "City_Village": "New York",
  "Education": "Bachelor",
  "DeviceName": "Samsung Galaxy S21"
}
```

**Response (201 Created):**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "UserName": "john_doe",
  "MobileNo": "9876543210",
  "Email": "john@example.com",
  "Password": "secure_password",
  "Address": "123 Main St",
  "City_Village": "New York",
  "ApplicationStatus": "active"
}
```

#### 2. Get All Users
```http
GET /api/users
```

**Response (200 OK):**
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "UserName": "john_doe",
    "MobileNo": "9876543210",
    "Email": "john@example.com"
  },
  ...
]
```

#### 3. Get User by ID
```http
GET /api/users/:id
```

**Example:** `GET /api/users/507f1f77bcf86cd799439011`

#### 4. Get User by Username
```http
GET /api/users/UserName/:UserName
```

**Example:** `GET /api/users/UserName/john_doe`

#### 5. Search Users by Name (Contains)
```http
GET /api/users/contains/:UserName
```

**Example:** `GET /api/users/contains/john`

#### 6. Update User
```http
PUT /api/users/:id
Content-Type: application/json

{
  "Email": "newemail@example.com",
  "Address": "456 Oak Ave"
}
```

**Example:** `PUT /api/users/507f1f77bcf86cd799439011`

## Maui HttpClient Implementation Example

```csharp
using System.Net.Http.Json;

public class UserApiService
{
    private readonly HttpClient _httpClient = new();
    private const string BaseUrl = "http://localhost:3000/api";

    public async Task<List<User>> GetAllUsersAsync()
    {
        try
        {
            var response = await _httpClient.GetAsync($"{BaseUrl}/users");
            if (response.IsSuccessStatusCode)
            {
                return await response.Content.ReadAsAsync<List<User>>();
            }
        }
        catch (Exception ex)
        {
            Debug.WriteLine($"Error: {ex.Message}");
        }
        return new List<User>();
    }

    public async Task<User> CreateUserAsync(User user)
    {
        try
        {
            var response = await _httpClient.PostAsJsonAsync($"{BaseUrl}/users", user);
            if (response.IsSuccessStatusCode)
            {
                return await response.Content.ReadAsAsync<User>();
            }
        }
        catch (Exception ex)
        {
            Debug.WriteLine($"Error: {ex.Message}");
        }
        return null;
    }

    public async Task<User> GetUserByIdAsync(string id)
    {
        try
        {
            var response = await _httpClient.GetAsync($"{BaseUrl}/users/{id}");
            if (response.IsSuccessStatusCode)
            {
                return await response.Content.ReadAsAsync<User>();
            }
        }
        catch (Exception ex)
        {
            Debug.WriteLine($"Error: {ex.Message}");
        }
        return null;
    }

    public async Task<User> UpdateUserAsync(string id, User user)
    {
        try
        {
            var response = await _httpClient.PutAsJsonAsync($"{BaseUrl}/users/{id}", user);
            if (response.IsSuccessStatusCode)
            {
                return await response.Content.ReadAsAsync<User>();
            }
        }
        catch (Exception ex)
        {
            Debug.WriteLine($"Error: {ex.Message}");
        }
        return null;
    }
}
```

## Testing with Maui

1. Ensure the API server is running:
   ```bash
   npm run dev
   ```

2. In your Maui app, make HTTP requests to the endpoints above

3. Handle responses and exceptions appropriately

## Localhost Configuration

For **Android Emulator**:
```
Base URL: http://10.0.2.2:3000/api
```

For **iOS Simulator**:
```
Base URL: http://localhost:3000/api
```

For **Physical Device**:
```
Base URL: http://<your-computer-ip>:3000/api
```

## Error Handling

The API returns standard HTTP status codes:

- **200** - Success
- **201** - Created
- **400** - Bad Request
- **404** - Not Found
- **500** - Server Error

## Git Repository

This project is now in a Git repository. To push to a remote repository:

```bash
git remote add origin <your-github-url>
git push -u origin master
```

---

Ready to test! Let me know if you need additional endpoints or modifications.
