// src/routes/auth.js
const bcrypt = require("bcrypt");
const pool = require("../db");

const SALT_ROUNDS = 10;

async function authRoutes(fastify, opts) {
    // REGISTER
    fastify.post("/api/register", async (request, reply) => {
        try {
            const { name, email, password } = request.body;

            if (!name || !email || !password) {
                return reply.code(400).send({
                    success: false,
                    message: "Nama, email, dan password wajib diisi",
                });
            }

            const [existing] = await pool.query(
                "SELECT id FROM users WHERE email = ?",
                [email]
            );

            if (existing.length > 0) {
                return reply
                    .code(400)
                    .send({ success: false, message: "Email sudah terdaftar" });
            }

            const hash = await bcrypt.hash(password, SALT_ROUNDS);

            const [result] = await pool.query(
                "INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)",
                [name, email, hash]
            );

            return reply.send({
                success: true,
                message: "Registrasi berhasil",
                userId: result.insertId,
            });
        } catch (err) {
            console.error("Register Error:", err);
            return reply
                .code(500)
                .send({ success: false, message: "Terjadi kesalahan server" });
        }
    });

    // LOGIN
    fastify.post("/api/login", async (request, reply) => {
        try {
            const { email, password } = request.body;

            if (!email || !password) {
                return reply
                    .code(400)
                    .send({ success: false, message: "Email dan password wajib diisi" });
            }

            const [rows] = await pool.query(
                "SELECT id, name, email, password_hash FROM users WHERE email = ?",
                [email]
            );

            if (rows.length === 0) {
                return reply
                    .code(400)
                    .send({ success: false, message: "Email atau password salah" });
            }

            const user = rows[0];

            const match = await bcrypt.compare(password, user.password_hash);
            if (!match) {
                return reply
                    .code(400)
                    .send({ success: false, message: "Email atau password salah" });
            }

            return reply.send({
                success: true,
                message: "Login berhasil",
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                },
            });
        } catch (err) {
            console.error("Login Error:", err);
            return reply
                .code(500)
                .send({ success: false, message: "Terjadi kesalahan server" });
        }
    });
}

module.exports = authRoutes;
