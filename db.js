import mysql from "mysql";

let db = null;

if (
  process.env.MYSQLHOST &&
  process.env.MYSQLUSER &&
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
      console.error("DB connection failed:", err.message);
    } else {
      console.log("MySQL connected");
    }
  });
} else {
  console.log("⚠️ MySQL env vars missing — DB not connected (OK for deploy)");
}

export { db };
