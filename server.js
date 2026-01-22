import express from 'express';
import path from 'path';
import 'dotenv/config';
import db from './db/connection.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM students ORDER BY id ASC');
    res.render('index', { students: result.rows, message: null });
  }
  catch (err) { 
    console.error('Error fetching students:', err);
    res.render('index', { students: [], message: 'Error fetching students' });
  }
});

// Add new student
app.post('/students', async (req, res) => {
  const { name, email, age, course } = req.body;
  try {
    await db.query(
      'INSERT INTO students (name, email, age, course) VALUES ($1, $2, $3, $4)',
      [name, email, age, course]
    );
    res.redirect('/');
  }
  catch(error){
    console.error("Error adding student: ",error);
    res.redirect('/?error = Failed to add student');
  }
});
// Get student by ID
app.get('/students/:id', async(req, res) => {
  try{
    const result = await db.query('SELECT * FROM students where id = $1',
      [req.params.id]);

    if (result.rows.length == 0){
      return res.status(404).send("Student Not Found!");
    }
    res.render('edit', {student: result.rows[0]});
  }
  catch(error){
    console.error('Error fetching student: ', error);
    res.redirect('/?error = failed to fetch student');
  }
});

// Update student
app.post('/students/:id', async(req, res) => {
  const {name, email, age, course} = req.body;
  try{
    await db.query(
      'UPDATE students SET name = $1, email = $2, age = $3, course = $4 WHERE id = $5',
      [name, email, age, course, req.params.id]
    );
    res.redirect(`/`);
  }
  catch(error)
  {
    console.error("Error Updating Student: ", error);
    res.redirect(`/students/${req.params.id}?error= Failed to update student`);
  }
});

// Delete student
app.post('/students/:id/delete', async(req, res)=>{
  try{
    await db.query('DELETE FROM students WHERE ID = $1', [req.params.id])
    res.redirect('/')
  }
  catch(error)
  {
    console.error('Error Deleting Student: ', error);
    res.redirect('/?error = Failed to delete student');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log('Make sure PostgreSQL is running and database is set up!');
});

