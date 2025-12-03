const fastify = require('fastify')({ logger: true });
const cors = require('@fastify/cors');

fastify.register(cors, {
    origin: true,
});

// Register routes
fastify.register(require('./routes'));

// Start server
const start = async () => {
    try {
        await fastify.listen({ port: 3000, host: '0.0.0.0' });
        console.log('Fastify server running on http://localhost:3000');
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
