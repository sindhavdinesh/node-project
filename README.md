# 📚 Book Store API

A RESTful API built using Node.js, Express, and MongoDB for managing books with full CRUD functionality.

---

## 🚀 Features

* 📖 Add new book
* ✏️ Update book details
* ❌ Delete book
* 📚 View all books
* 🔍 View single book
* 🖼️ Upload book images
* 🎨 Basic frontend using EJS

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* EJS (Template Engine)
* CSS

---

## 📂 Project Structure

```
make Book Store APIs Projects/
│── config/
│   └── db.js
│── model/
│   └── bookModel.js
│── public/
│   └── css/
│       └── style.css
│── uploads/
│   └── (book images)
│── views/
│   ├── addData.ejs
│   ├── showData.ejs
│   └── sidebar.ejs
│── app.js
│── package.json
│── package-lock.json
│── .gitignore
```

---

## ⚙️ Installation

1. Clone the repository:

```
git clone https://github.com/your-username/book-store-api.git
```

2. Go to project folder:

```
cd book-store-api
```

3. Install dependencies:

```
npm install
```

4. Create `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

5. Run project:

```
node app.js
```

---

## 📌 API Routes

| Method | Route      | Description     |
| ------ | ---------- | --------------- |
| GET    | /books     | Get all books   |
| GET    | /books/:id | Get single book |
| POST   | /books     | Add new book    |
| PUT    | /books/:id | Update book     |
| DELETE | /books/:id | Delete book     |

---

## 📦 Example Data

```json
{
  "title": "Rich Dad Poor Dad",
  "author": "Robert Kiyosaki",
  "price": 350
}
```

---

## 🧪 Testing

Use:

* Postman
* Thunder Client

---

## ⚠️ Important (.gitignore)

Make sure you add these in `.gitignore`:

```
node_modules/
.env
uploads/
```

---

## 🙌 Author

**Dinesh Sindhav**

---

## 📜 License

MIT License
