import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import cors from "cors";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "TUP",
  password: "123456",
  port: 5432
})

const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());
db.connect();

app.get('/', async (req, res) => {
  try {
    const result = await db.query("SELECT id, firstname, middlename, academiccollege, lastname, role, email FROM users")
    res.json(result.rows)
  } catch (err) {
    console.log(err.message);
  }
})

app.listen(port, () => {
  console.log('Server is listening in port 3000');
})