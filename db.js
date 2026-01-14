import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

let db = null;

if (
  process.env.MYSQLHOST &&
  process.env.MYSQLUSER &&
  process.env.MYSQLPASSWORD &&
  process.env.MYSQL_DATABASE
) {
  db = mysql.createConnection({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQLPORT,
  });

  db.connect((err) => {
    if (err) {
      console.log("❌ MySQL connection failed");
      db = null;
    } else {
      console.log("✅ MySQL connected");
    }
  });
} else {
  console.log("⚠️ MySQL env vars missing — DB disabled");
}

export { db };
