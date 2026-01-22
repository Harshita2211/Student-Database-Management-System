#  Students Database Management System

A simple, robust Students Database Management System built using **Node.js, Express.js, PostgreSQL, and EJS**. This project allows users to add, view, and manage student records through a clean, responsive web interface.

---

##  Features

*  **Add New Students**: Quickly register new students into the system.
*  **View All Students**: Display records in a clean, organized table.
*  **View Student Details**: Look up specific information by Student ID.
*  **Edit Student Information**: Update existing records (In Progress).
*  **Delete Student Records**: Remove entries from the database (In Progress).
*  **PostgreSQL Integration**: Persistent data storage with a relational database.
*  **Clean UI**: Styled using EJS templates and custom CSS.

---

##  Tech Stack

| Technology | Usage |
| :--- | :--- |
| **Node.js** | Backend runtime environment |
| **Express.js** | Web framework for routing and middleware |
| **PostgreSQL** | Relational database management system |
| **pg** | Non-blocking PostgreSQL client for Node.js |
| **EJS** | Embedded JavaScript templates for dynamic HTML |
| **HTML/CSS** | Frontend structure and styling |
| **dotenv** | Management of environment variables |

---

##  Installation & Setup

Follow these steps to get the project running on your local machine:

```bash
1️⃣ Clone the Repository

git clone [https://github.com/Harshita2211/students-database.git](https://github.com/Harshita2211/students-database.git)
cd students-database

2️⃣ Install Dependencies
npm install

3️⃣ Setup PostgreSQL Database

Create a database and table:

CREATE DATABASE students_db;

CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  age INTEGER,
  course VARCHAR(100)
);

4️⃣ Create .env File

Create a .env file in the root directory and add:

DB_HOST=localhost
DB_PORT=5432
DB_NAME=students_db
DB_USER=postgres
DB_PASSWORD=your_password
PORT=3000

5️⃣ Run the Server
node server.js
```
##  Project Structure

```text
students-database/
│
├── db/
│   └── connection.js        # PostgreSQL database connection
│
├── views/
│   ├── index.ejs            # Home page (list & add students)
│   └── edit.ejs             # Edit student details
│
├── public/
│   └── styles.css           # CSS styling
│
├── .env                     # Environment variables
├── server.js                # Main Express server
├── package.json             # Project dependencies
└── README.md                # Project documentation
```

##  API Routes

| Method | Route           | Description                |
| ------ | --------------- | -------------------------- |
| GET    | `/`             | View all students          |
| POST   | `/students`     | Add new student            |
| GET    | `/students/:id` | View / Edit student        |
| PUT    | `/students/:id` | Update student *(pending)* |
| DELETE | `/students/:id` | Delete student *(pending)* |

##  Future Improvements

-  Complete **Edit and Update** functionality  
-  Complete **Delete** functionality  
-  **Input Validation**: Add server-side and client-side checks  
-  **UI/UX Enhancement**: Transition to Bootstrap or Tailwind CSS  
-  **Search Bar**: Implement real-time filtering by name or course  

---

##  Author

**Harshita Gupta**  
 Delhi, India  
 IT Engineering Student  

 **GitHub:** https://github.com/Harshita2211  
 **LinkedIn:** https://www.linkedin.com/in/harshita-gupta-247774334/

 If you find this project helpful, don't forget to star the repository!

