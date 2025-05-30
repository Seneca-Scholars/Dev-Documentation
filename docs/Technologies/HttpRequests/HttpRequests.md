---
title: HTTP Requests
parent: Technologies
---

# HTTP Requests Overview

## HTTP Methods

### GET
- Used to retrieve data from a server
- Parameters are sent in URL
- Should not modify data
- Can be cached
- Example:
```bash
GET /api/users?page=1&limit=10
```

### POST
- Used to submit data to be processed
- Data sent in request body
- Can modify data
- Not cached
- Example:
```bash
POST /api/users
Content-Type: application/json

{
    "name": "John Doe",
    "email": "john@example.com"
}
```

### PUT
- Used to update existing resources
- Idempotent (multiple requests have same effect as one)
- Example:
```bash
PUT /api/users/123
Content-Type: application/json

{
    "name": "John Doe Updated"
}
```

### DELETE
- Used to remove resources
- Idempotent
- Example:
```bash
DELETE /api/users/123
```

### PATCH
- Used for partial updates
- Not idempotent
- Example:
```bash
PATCH /api/users/123
Content-Type: application/json

{
    "email": "newemail@example.com"
}
```

## CRUD Operations

CRUD (Create, Read, Update, Delete) represents the four basic operations of persistent storage. In RESTful APIs, these operations map to specific HTTP methods.

### Create (POST)
- Creates new resources
- Returns 201 (Created) on success
- Example:
```bash
POST /api/users
Content-Type: application/json

{
    "name": "John Doe",
    "email": "john@example.com",
    "role": "developer"
}
```

### Read (GET)
- Retrieves existing resources
- Can be used for:
  - Single resource: `GET /api/users/123`
  - Collection: `GET /api/users`
  - Filtered collection: `GET /api/users?role=developer`
- Returns 200 (OK) on success

### Update
#### Full Update (PUT)
- Replaces entire resource
- Idempotent
- Example:
```bash
PUT /api/users/123
Content-Type: application/json

{
    "name": "John Doe",
    "email": "john@example.com",
    "role": "senior developer"
}
```

#### Partial Update (PATCH)
- Updates specific fields
- Not idempotent
- Example:
```bash
PATCH /api/users/123
Content-Type: application/json

{
    "role": "senior developer"
}
```

### Delete (DELETE)
- Removes resources
- Returns 204 (No Content) on success
- Example:
```bash
DELETE /api/users/123
```

### CRUD Response Patterns

#### Successful Creation
```json
{
    "id": 123,
    "name": "John Doe",
    "email": "john@example.com",
    "role": "developer",
    "created_at": "2024-03-20T10:00:00Z"
}
```

#### Successful Read
```json
{
    "id": 123,
    "name": "John Doe",
    "email": "john@example.com",
    "role": "developer",
    "created_at": "2024-03-20T10:00:00Z",
    "updated_at": "2024-03-20T10:00:00Z"
}
```

#### Successful Update
```json
{
    "id": 123,
    "name": "John Doe",
    "email": "john@example.com",
    "role": "senior developer",
    "created_at": "2024-03-20T10:00:00Z",
    "updated_at": "2024-03-20T11:00:00Z"
}
```

### CRUD Best Practices

1. **Resource Naming**
   - Use plural nouns for collections
   - Use consistent naming conventions
   - Example: `/api/users`, `/api/products`

2. **Response Consistency**
   - Use consistent response formats
   - Include relevant metadata
   - Provide proper status codes

3. **Error Handling**
   - Return appropriate error codes
   - Provide clear error messages
   - Include validation errors

4. **Pagination**
   - Implement for collection endpoints
   - Use consistent pagination parameters
   - Include pagination metadata

5. **Filtering and Sorting**
   - Support query parameters for filtering
   - Allow sorting by multiple fields
   - Document available filters

## RESTful API Design

### Principles
1. **Client-Server Architecture**
   - Separation of concerns
   - Independent evolution

2. **Stateless**
   - Each request contains all necessary information
   - No client context stored on server

3. **Cacheable**
   - Responses must define themselves as cacheable or not
   - Improves efficiency and scalability

4. **Uniform Interface**
   - Resource identification
   - Manipulation through representations
   - Self-descriptive messages
   - HATEOAS (Hypermedia as the Engine of Application State)

5. **Layered System**
   - Client can't tell if connected directly to server
   - Load balancing
   - Shared caches

### Best Practices
1. Use nouns for resources
2. Use HTTP methods appropriately
3. Use proper status codes
4. Version your APIs
5. Use query parameters for filtering
6. Implement pagination
7. Use proper error handling

## Authentication

### Basic Authentication
```bash
Authorization: Basic base64(username:password)
```

### Bearer Token
```bash
Authorization: Bearer <token>
```

### API Keys
```bash
X-API-Key: <api-key>
```

### OAuth 2.0
- Authorization code flow
- Client credentials flow
- Resource owner password flow
- Implicit flow

## Request/Response Handling

### Headers
```bash
# Common Request Headers
Content-Type: application/json
Accept: application/json
Authorization: Bearer <token>
User-Agent: <client-info>

# Common Response Headers
Content-Type: application/json
Cache-Control: max-age=3600
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

### Status Codes
- 2xx: Success
  - 200: OK
  - 201: Created
  - 204: No Content
- 3xx: Redirection
  - 301: Moved Permanently
  - 304: Not Modified
- 4xx: Client Error
  - 400: Bad Request
  - 401: Unauthorized
  - 403: Forbidden
  - 404: Not Found
- 5xx: Server Error
  - 500: Internal Server Error
  - 503: Service Unavailable

## Error Handling

### Error Response Format
```json
{
    "error": {
        "code": "ERROR_CODE",
        "message": "Human readable message",
        "details": {
            "field": "Additional error details"
        }
    }
}
```

### Best Practices
1. Use appropriate status codes
2. Provide clear error messages
3. Include error codes for programmatic handling
4. Log errors server-side
5. Don't expose sensitive information
