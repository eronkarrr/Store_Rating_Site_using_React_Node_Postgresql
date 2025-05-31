# 🛍️ Store Rating Site

A full-stack web application that allows users to rate and review stores. Built using **React** (frontend), **Node.js + NestJs** (backend), and **PostgreSQL** (database).

## 📌 Features

- 🔐 User Authentication (Login/Signup)
- 🏪 Store Listings with Ratings
- ⭐ Rate & Review Stores
- 📊 Dashboard for Users & Admins
- ✅ Form Validation
- 📂 Role-based Access (System Admin, Store Owner, Normal User)

---

## 🛠️ Tech Stack

### Frontend:
- React.js
- Axios
- TailwindCSS / Bootstrap (as used)

### Backend:
- Node.js
- Express.js
- PostgreSQL (with pg library)

### Tools:
- Git & GitHub
- Postman (for API testing)
- VS Code

---

## 📦 Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/eronkarrr/Store_Rating_Site_using_React_Node_Postgresql.git
cd Store_Rating_Site_using_React_Node_Postgresql
2️⃣ Setup Backend
bash
Copy
Edit
cd backend
npm install
🔧 Create a .env file in backend/ with:

env
Copy
Edit
PORT=5000
DATABASE_URL=your_postgresql_connection_url
JWT_SECRET=your_jwt_secret
bash
Copy
Edit
npm run dev
3️⃣ Setup Frontend
bash
Copy
Edit
cd ../frontend
npm install
npm start
The app will run on: http://localhost:3000

🗃️ Database
PostgreSQL used for storing users, stores, and ratings.

Make sure to create required tables using SQL migration or schema file (include if available).

📸 Screenshots
(Add screenshots of dashboard, store listing, rating form, etc.)

🚀 Future Improvements
Add filters and search for stores

Profile picture upload

Admin analytics dashboard

Mobile responsive design

🤝 Contributing
Contributions are welcome! Fork the repo and create a pull request.

📄 License
This project is open-source and available under the MIT License.

🙋‍♂️ Author
@eronkarrr


## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
