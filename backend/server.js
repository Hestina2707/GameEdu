// backend/server.js (Jalankan: npm init -y && npm install express mysql2 cors)
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({ host: "localhost", user: "root", password: "", database: "game_edu" });
app.get("/api/questions", (req, res) => {
 db.query("SELECT * FROM questions ORDER BY id DESC", (err, results) => {
    if (err) return res.status(500).json(err);
 res.json(results);
 });
});
app.post("/api/questions", (req, res) => {
 const { mapel, bab, bloom, durasi, pertanyaan, opsi_a, opsi_b, opsi_c, opsi_d, kunci, pembahasan } =
req.body;
 const sql = "INSERT INTO questions (mapel, bab, bloom, durasi, pertanyaan, opsi_a, opsi_b, opsi_c, opsi_d, kunci, pembahasan) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
 db.query(sql, [mapel, bab, bloom, durasi, pertanyaan, opsi_a, opsi_b, opsi_c, opsi_d, kunci, pembahasan],
(err, result) => {
 if (err) return res.status(500).json(err);
 res.json({ id: result.insertId, message: "Soal tersimpan" });
 });});
app.delete("/api/questions/:id", (req, res) => {
 db.query("DELETE FROM questions WHERE id = ?", [req.params.id], (err) => {
 if (err) return res.status(500).json(err);
 res.json({ message: "Soal dihapus" });
 });
});


//login dan register
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "rahasia_game_edu_2026";

app.post("/api/register", async (req, res) => {
  const { nama, email, mapel, password } = req.body;
  if (!nama || !email || !password) {
    return res.status(400).json({ message: "Nama, email, dan password wajib diisi." });
  }

  db.query("SELECT id FROM users WHERE email = ?", [email], async (err, rows) => {
    if (err) return res.status(500).json(err);
    if (rows.length > 0) {
      return res.status(409).json({ message: "Email sudah terdaftar." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = "INSERT INTO users (nama, email, mapel, password) VALUES (?, ?, ?, ?)";
    db.query(sql, [nama, email, mapel || "Matematika", hashedPassword], (insertErr, result) => {
      if (insertErr) return res.status(500).json(insertErr);
      res.status(201).json({ id: result.insertId, message: "Registrasi berhasil!" });
    });
  });
});

// Endpoint login
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, rows) => {
    if (err) return res.status(500).json(err);
    if (rows.length === 0) {
      return res.status(401).json({ message: "Email atau password salah." });
    }

    const user = rows[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Email atau password salah." });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: "1d" });
    res.json({
      message: "Login berhasil",
      token,
      user: { id: user.id, nama: user.nama, email: user.email, mapel: user.mapel },
    });
  });
});

// Endpoint untuk mendapatkan daftar siswa
app.get("/api/students", (req, res) => {
  db.query("SELECT * FROM students ORDER BY id DESC", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

// Endpoint untuk menambahkan siswa baru
app.post("/api/students", (req, res) => {
  const { nama, kelas, tim, poin } = req.body;
  const sql = "INSERT INTO students (nama, kelas, tim, poin) VALUES (?, ?, ?, ?)";
  db.query(sql, [nama, kelas, tim || "Tim Komering", Number(poin) || 0], (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ id: result.insertId, message: "Siswa tersimpan" });
  });
});

// Endpoint untuk memperbarui data siswa
app.put("/api/students/:id", (req, res) => {
  const { nama, kelas, tim, poin } = req.body;
  const sql = "UPDATE students SET nama = ?, kelas = ?, tim = ?, poin = ? WHERE id = ?";
  db.query(sql, [nama, kelas, tim, Number(poin) || 0, req.params.id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Data siswa diperbarui" });
  });
});

// Endpoint untuk menghapus siswa
app.delete("/api/students/:id", (req, res) => {
  db.query("DELETE FROM students WHERE id = ?", [req.params.id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Siswa dihapus" });
  });
});

// Endpoint untuk memperbarui soal
app.put("/api/questions/:id", (req, res) => {
  const { mapel, bab, bloom, durasi, pertanyaan, kunci } = req.body;
  const sql =
    "UPDATE questions SET mapel = ?, bab = ?, bloom = ?, durasi = ?, pertanyaan = ?, kunci = ? WHERE id = ?";
  db.query(
    sql,
    [mapel, bab, bloom || "C3", Number(durasi) || 30, pertanyaan, kunci, req.params.id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Soal diperbarui" });
    }
  );
});

app.listen(5000, () => console.log("Server Backend GameEdu berjalan di http://localhost:5000"));

