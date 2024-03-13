const express = require("express");
const mysql = require("mysql2")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cors = require("cors")
const dotenv = require("dotenv");
dotenv.config();

// use to server 
const port = process.env.PORT;
const app = express();


// middleware
app.use(express.json());
app.use(cors({origin :"http://localhost:5173"}));



// database connection 
const connection = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "sanjay007",
  database: "taskweb"
});

// login function 
app.post('/register', async (req, res) => {
  const { username, email ,role, password } = req.body;
  console.log(role);
  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user data into the database
    connection.query(
      'INSERT INTO userinfo (username, email ,role, password) VALUES (?, ?, ? ,?)',
      [username, email ,role, hashedPassword],
      (err, result) => {
        if (err) {
          console.error('Error inserting data into MySQL:', err);
          res.status(500).json({ error: 'Internal server error' });
        } else {
          console.log('Data inserted into MySQL successfully:', result);
          res.json('Successfully registered');
        }
      }
    );
  } catch (error) {
    console.error('Error hashing password:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// login function
app.post('/login', async (req, res) => {
  const { email, password, role } = req.body;
  try {
    // ?Query the database to retrieve user data
    connection.query(
      'SELECT * FROM userinfo WHERE email = ?', [email,role],
      async (err, result) => {
        if (err) {
          console.error('Error querying data from MySQL:', err);
          res.status(500).json({ error: 'Internal server error' });
        } else {
          if (result.length > 0) {
            // ?User found, compare hashed password
            const user = result[0];
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (passwordMatch) {
              // ?Generate JWT token
              const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
                expiresIn: '1h'
              });
              res.json({ message: 'Login successful', token, email: user.email });
              console.log('Data retrieved from MySQL successfully:', user);
            } else {
              res.status(401).json({ error: 'Invalid username or password' });
            }
          } else {
            res.status(401).json({ error: 'Invalid username or password' });
          }
        }
      }
    );
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



//? admin page

// app.post('/admin', async (req, res) => {
//    const {  }
// })



//? to database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database!');
});




app.listen(port, () => {
  console.log(`connected to port ${port}`)
});
