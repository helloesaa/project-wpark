// src/server.js
const fastify = require("fastify")({ logger: true });
const cors = require("@fastify/cors"); // ← hanya ini!
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");

dotenv.config();

// register CORS
fastify.register(cors, {
    origin: "*", // sementara allow semua
});

// register routes
fastify.register(authRoutes);

//route
fastify.get("/", async (request, reply) => {
    return { status: "ok", message: "W-PARK backend running" };
});

const PORT = Number(process.env.PORT) || 5000;

const start = async () => {
    try {
        const address = await fastify.listen({
            port: PORT,
            host: "0.0.0.0",
        });

        console.log(`🚀 Server running at ${address}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
