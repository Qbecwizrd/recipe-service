
## ✅ `README.md` for Recipe Service

````markdown
# 🥗 Recipe Service

This service manages recipe-related operations including create, read, update, and delete (CRUD) functionality. It works alongside the Auth Service to associate recipes with users.

---

## 📦 Prerequisites

### 1. Environment Setup

- Node.js (LTS recommended)
- MongoDB (local or Atlas)
- Code editor (VS Code)

---

### 2. Install Dependencies

```bash
npm install express mongoose dotenv cors
````

#### Optional (for future enhancements):

* `express-validator` – Input validation
* `jsonwebtoken` – If protecting endpoints with JWT

---

## 🗂️ Folder Structure

```
recipe-service/
│
├── controllers/         # Business logic for recipes
├── models/              # Recipe schema
├── routes/              # API endpoints for recipes
├── middleware/          # (Optional) Auth middleware
├── config/              # DB connection
├── .env                 # Environment variables
├── server.js            # Express app entry point
└── package.json
```

---

## 🔐 Environment Variables (`.env`)

```env
PORT=5001
MONGO_URI=mongodb://localhost:27017/recipeservice
```

---

## 📌 Core Features

* Add a new recipe
* Get all recipes
* Get a specific recipe
* Update a recipe
* Delete a recipe

---

## 🧪 Example Endpoints

* **POST** `/recipes` – Add a recipe
* **GET** `/recipes` – View all recipes
* **GET** `/recipes/:id` – Get a single recipe
* **PUT** `/recipes/:id` – Update a recipe
* **DELETE** `/recipes/:id` – Delete a recipe

Use Postman or cURL to test these endpoints.

---

## 🔄 Sample cURL Request

```bash
curl -X POST http://localhost:5001/recipes \
-H "Content-Type: application/json" \
-d '{
  "title": "Spaghetti",
  "ingredients": ["pasta", "tomato", "basil"],
  "instructions": "Boil pasta. Add sauce.",
  "tags": ["italian", "dinner"],
  "author": "USER_ID"
}'
```

---

## ✅ Future Enhancements

* Add authentication via JWT (reuse middleware from Auth Service)
* Add search service or filtering by tags, ingredients
* Add pagination and sorting

---

## 📞 API Flow Diagram

```
+-------------+           +---------------+           +--------------+
|  Frontend   |  ----->   | Recipe Routes |  ----->   | MongoDB      |
+-------------+           +---------------+           +--------------+
        |                        |                            |
        |   POST /recipes        |                            |
        |----------------------->|                            |
        |                        |  Save recipe               |
        |                        |--------------------------->|
        |                        |                            |
```

---

## 📚 License

MIT

```

---

```

## 🗂️ Folder Structure

recipe-service/
│
├── models/
│   └── Recipe.js          <-- Recipe Schema
│
├── routes/
│   └── recipeRoutes.js    <-- API routes
│
├── controllers/
│   └── recipeController.js  <-- Logic for handling recipes
│
├── config/
│   └── db.js              <-- MongoDB connection logic
│
├── .env
├── server.js
└── package.json
