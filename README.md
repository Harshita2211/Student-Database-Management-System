# PostgreSQL Database Demo - Students Management

A complete demo project showing how to connect Node.js, Express, and EJS to a PostgreSQL database for managing student records.

## 🚀 Features

- **Full CRUD Operations**: Create, Read, Update, and Delete student records
- **Modern UI**: Beautiful, responsive interface built with EJS templates
- **PostgreSQL Integration**: Secure database connection using `pg` library
- **Express.js Backend**: RESTful API endpoints
- **EJS Templating**: Server-side rendering with dynamic views

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **PostgreSQL** (v12 or higher) - [Download](https://www.postgresql.org/download/)
- **npm** (comes with Node.js)

## 🛠️ Installation Steps

### 1. Install PostgreSQL

If you haven't already, install PostgreSQL on your system:
- **Windows**: Download from [PostgreSQL Official Site](https://www.postgresql.org/download/windows/)
- **macOS**: `brew install postgresql` or download from official site
- **Linux**: `sudo apt-get install postgresql postgresql-contrib`

### 2. Create Database

Open PostgreSQL command line (psql) or pgAdmin and run:

```sql
CREATE DATABASE students_db;
```

### 3. Set Up Database Schema

Run the SQL script to create the table and sample data:

```bash
# Using psql command line
psql -U postgres -d students_db -f database/schema.sql

# Or copy and paste the contents of database/schema.sql into pgAdmin query tool
```

### 4. Install Project Dependencies

Navigate to the project directory and install dependencies:

```bash
cd PG_DB
npm install
```

### 5. Configure Environment Variables

Copy the example environment file and update with your database credentials:

```bash
# Windows
copy env.template .env

# macOS/Linux
cp env.template .env
```

Edit `.env` file with your PostgreSQL credentials:

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=students_db
DB_USER=postgres
DB_PASSWORD=your_password_here
PORT=3000
```

## 🎯 Running the Application

### Start the Server

```bash
npm start
```

Or for development with auto-reload (if nodemon is installed):

```bash
npm run dev
```

### Access the Application

Open your browser and navigate to:
```
http://localhost:3000
```

## 📁 Project Structure

```
PG_DB/
├── db/
│   └── connection.js      # PostgreSQL connection pool
├── database/
│   └── schema.sql         # Database schema and sample data
├── views/
│   ├── index.ejs          # Main page with student list
│   └── student-detail.ejs # Student edit page
├── public/                # Static files (CSS, JS, images)
├── server.js              # Express server and routes
├── package.json           # Project dependencies
├── env.template           # Environment variables template
└── README.md              # This file
```

## 🔧 API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/` | Display all students |
| POST | `/students` | Create a new student |
| GET | `/students/:id` | Get student details |
| POST | `/students/:id/update` | Update student |
| POST | `/students/:id/delete` | Delete student |

## 💡 Usage Examples

### Adding a Student

1. Fill in the form on the homepage
2. Enter name, email, age, and select a course
3. Click "Add Student"

### Editing a Student

1. Click "View/Edit" button next to any student
2. Modify the information
3. Click "Update Student"

### Deleting a Student

1. Click "Delete" button next to any student
2. Confirm the deletion

## 🐛 Troubleshooting

### Connection Error

If you get a connection error:
- Verify PostgreSQL is running: `pg_isready` or check services
- Check your `.env` file has correct credentials
- Ensure the database `students_db` exists
- Verify the user has proper permissions

### Port Already in Use

If port 3000 is already in use:
- Change `PORT` in `.env` file
- Or kill the process using port 3000

### Module Not Found

If you get module errors:
- Run `npm install` again
- Delete `node_modules` and `package-lock.json`, then run `npm install`

## 📚 Learning Resources

This project demonstrates:
- **Express.js**: Web framework for Node.js
- **EJS**: Embedded JavaScript templating
- **PostgreSQL**: Relational database management
- **pg library**: PostgreSQL client for Node.js
- **RESTful API**: Standard HTTP methods for CRUD operations

## 🔐 Security Notes

- Never commit `.env` file to version control
- Use environment variables for sensitive data
- In production, use connection pooling and prepared statements (already implemented)
- Consider adding authentication and authorization

## 📝 License

This is a demo project for educational purposes.

## 🤝 Contributing

Feel free to fork this project and add more features like:
- Search functionality
- Pagination
- Student photo uploads
- Advanced filtering
- Authentication system

---

**Happy Learning! 🎓**

