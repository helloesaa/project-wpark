const fastify = require('fastify')({ logger: true })
const cors = require('@fastify/cors')

async function buildServer() {
    const app = fastify

    await app.register(cors, {
        origin: '*',
    })

    // ⬇️ ini yang penting
    app.register(require('./routes'))

    return app
}

async function start() {
    const app = await buildServer()

    try {
        await app.listen({ port: 4000, host: '0.0.0.0' })
        console.log('Backend jalan di http://localhost:4000')
    } catch (err) {
        app.log.error(err)
        process.exit(1)
    }
}

start()
