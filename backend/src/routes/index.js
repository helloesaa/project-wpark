// src/routes/index.js
async function baseRoutes(fastify, opts) {
    fastify.get("/api/health", async (request, reply) => {
        return { status: "ok", app: "w-park-backend" };
    });
}

module.exports = baseRoutes;
