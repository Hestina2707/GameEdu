-- database/game_edu.sql
CREATE DATABASE IF NOT EXISTS game_edu;
USE game_edu;
CREATE TABLE questions (
 id INT AUTO_INCREMENT PRIMARY KEY,
 mapel VARCHAR(100) NOT NULL,
 bab VARCHAR(150) NOT NULL,
 bloom VARCHAR(10) DEFAULT 'C3',
 durasi INT DEFAULT 30,
 pertanyaan TEXT NOT NULL,
 opsi_a VARCHAR(255) NOT NULL,
 opsi_b VARCHAR(255) NOT NULL,
 opsi_c VARCHAR(255) NOT NULL,
 opsi_d VARCHAR(255) NOT NULL,
 kunci CHAR(1) NOT NULL,
 pembahasan TEXT,
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nama VARCHAR(120) NOT NULL,
  email VARCHAR(120) NOT NULL UNIQUE,
  mapel VARCHAR(100) DEFAULT 'Matematika',
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nama VARCHAR(120) NOT NULL,
  kelas VARCHAR(50) NOT NULL,
  tim VARCHAR(60) DEFAULT 'Tim Komering',
  poin INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO questions (mapel, bab, bloom, durasi, pertanyaan, opsi_a, opsi_b, opsi_c, opsi_d, kunci,
pembahasan)
VALUES ('Matematika', 'Bab 3 · Barisan dan Deret', 'C3', 30, 'Jumlah 10 suku pertama deret 2 + 4 + 6 + ...
adalah?', '100', '110', '120', '90', 'B', 'S10 = 10/2 x (2x2 + 9x2) = 110');
USE game_edu;

INSERT INTO questions (mapel, bab, bloom, durasi, pertanyaan, opsi_a, opsi_b, opsi_c, opsi_d, kunci, pembahasan)
VALUES
(
  'Matematika',
  'Bab 3 · Barisan dan Deret',
  'C2',
  20,
  'Suku ke-5 dari barisan aritmetika 3, 7, 11, 15, ... adalah?',
  '19',
  '18',
  '20',
  '21',
  'A',
  'U5 = a + (5 - 1)b = 3 + 4(4) = 19'
),
(
  'Matematika',
  'Bab 3 · Barisan dan Deret',
  'C2',
  25,
  'Beda (b) dari barisan aritmetika 20, 17, 14, 11, ... adalah?',
  '3',
  '-3',
  '-2',
  '2',
  'B',
  'b = U2 - U1 = 17 - 20 = -3'
),
(
  'Matematika',
  'Bab 3 · Barisan dan Deret',
  'C3',
  30,
  'Suku ke-4 dari barisan geometri 2, 6, 18, ... adalah?',
  '36',
  '48',
  '54',
  '72',
  'C',
  'r = 6/2 = 3, maka U4 = 2 x 3^3 = 54'
),
(
  'Matematika',
  'Bab 3 · Barisan dan Deret',
  'C3',
  35,
  'Jumlah 5 suku pertama deret aritmetika dengan a = 4 dan b = 3 adalah?',
  '40',
  '45',
  '50',
  '55',
  'C',
  'S5 = 5/2 x (2(4) + 4(3)) = 2,5 x 20 = 50'
),
(
  'Matematika',
  'Bab 3 · Barisan dan Deret',
  'C4',
  45,
  'Suatu barisan aritmetika memiliki U2 = 8 dan U6 = 20. Berapakah nilai suku pertamanya (a)?',
  '3',
  '4',
  '5',
  '6',
  'C',
  '4b = 20 - 8 = 12 -> b = 3, lalu a + 3 = 8 -> a = 5'
);