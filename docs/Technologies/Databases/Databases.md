---
title: Databases
parent: Technologies
---

# Databases Overview

## Relational Databases (RDBMS)

### Popular RDBMS
- **PostgreSQL**
  - Advanced features
  - JSON support
  - Extensible
  - Strong ACID compliance
  - Example:
  ```sql
  CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100),
      email VARCHAR(255) UNIQUE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  ```

- **MySQL**
  - High performance
  - Easy to use
  - Wide adoption
  - Good for web applications
  - Example:
  ```sql
  CREATE TABLE products (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100),
      price DECIMAL(10,2),
      stock INT
  );
  ```

- **SQLite**
  - Lightweight
  - Serverless
  - Zero configuration
  - Good for embedded systems
  - Example:
  ```sql
  CREATE TABLE notes (
      id INTEGER PRIMARY KEY,
      content TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
  ```

### Key Concepts
- Tables and relationships
- Primary and foreign keys
- Indexes
- Transactions
- ACID properties
- Normalization

## NoSQL Databases

### Document Stores
- **MongoDB**
  - JSON-like documents
  - Flexible schema
  - Horizontal scaling
  - Example:
  ```javascript
  db.users.insertOne({
      name: "John Doe",
      email: "john@example.com",
      roles: ["admin", "user"],
      created_at: new Date()
  });
  ```

- **CouchDB**
  - RESTful API
  - Offline-first
  - Conflict resolution
  - Example:
  ```javascript
  {
      "_id": "user123",
      "name": "Jane Smith",
      "email": "jane@example.com",
      "type": "user"
  }
  ```

### Key-Value Stores
- **Redis**
  - In-memory data store
  - Data structures
  - Pub/Sub
  - Example:
  ```bash
  SET user:123 "John Doe"
  GET user:123
  ```

- **DynamoDB**
  - Managed service
  - Auto-scaling
  - Low latency
  - Example:
  ```javascript
  {
      "UserId": "123",
      "Name": "John Doe",
      "Email": "john@example.com"
  }
  ```

### Graph Databases
- **Neo4j**
  - Graph relationships
  - Cypher query language
  - Example:
  ```cypher
  CREATE (user:User {name: "John"})
  -[:FRIENDS_WITH]->
  (friend:User {name: "Jane"})
  ```

## Database Design Principles

### Normalization
1. **First Normal Form (1NF)**
   - Atomic values
   - No repeating groups
   - Primary key

2. **Second Normal Form (2NF)**
   - 1NF compliant
   - No partial dependencies
   - All non-key attributes depend on primary key

3. **Third Normal Form (3NF)**
   - 2NF compliant
   - No transitive dependencies
   - All attributes depend on primary key

### Denormalization
- Performance optimization
- Read-heavy workloads
- Data warehousing
- Reporting systems

## Query Optimization

### Indexing Strategies
- B-tree indexes
- Hash indexes
- Composite indexes
- Partial indexes
- Expression indexes

### Query Performance
- Execution plans
- Query hints
- Statistics
- Caching
- Connection pooling

### Common Optimizations
1. Use appropriate indexes
2. Write efficient queries
3. Avoid SELECT *
4. Use prepared statements
5. Implement caching

## Data Modeling

### Conceptual Model
- Entity identification
- Relationship definition
- Attribute assignment
- Business rules

### Logical Model
- Table design
- Relationship mapping
- Constraint definition
- Normalization

### Physical Model
- Storage optimization
- Index design
- Partitioning
- Clustering

## Database Administration

### Backup and Recovery
- Full backups
- Incremental backups
- Point-in-time recovery
- Disaster recovery
- Backup verification

### Security
- User management
- Access control
- Encryption
- Audit logging
- Security policies

### Monitoring
- Performance metrics
- Resource usage
- Query analysis
- Error tracking
- Alert systems

### Maintenance
- Index maintenance
- Statistics updates
- Vacuum operations
- Log rotation
- Configuration tuning

## Best Practices

### Design
1. Plan for scalability
2. Consider performance
3. Implement security
4. Document design decisions
5. Follow naming conventions

### Development
1. Use migrations
2. Implement version control
3. Write unit tests
4. Use connection pooling
5. Implement error handling

### Operations
1. Regular backups
2. Monitor performance
3. Update statistics
4. Review logs
5. Plan maintenance

## Common Use Cases

### Web Applications
- User management
- Content management
- Session storage
- Analytics

### Data Warehousing
- Reporting
- Analytics
- Business intelligence
- Data mining

### IoT Applications
- Time-series data
- Sensor data
- Real-time analytics
- Device management

### Mobile Applications
- Offline storage
- Sync mechanisms
- User preferences
- Cache management
