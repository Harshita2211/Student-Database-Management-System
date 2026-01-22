-- Create database (run this in PostgreSQL first)
-- CREATE DATABASE students_db;

-- Connect to students_db and run the following:

-- Create students table
CREATE TABLE IF NOT EXISTS students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    age INTEGER,
    course VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data
INSERT INTO students (name, email, age, course) VALUES
    ('Amit Singh', 'amit@example.com', 20, 'Computer Science'),
    ('Kamla Devi', 'kd@example.com', 21, 'Mathematics'),
    ('Rajat Singh', 'rajat@example.com', 19, 'Physics'),
    ('Anita Sharma', 'as@example.com', 22, 'Computer Science'),
    ('Krishan Dev', 'kd@example.com', 20, 'Mathematics')
ON CONFLICT (email) DO NOTHING;

