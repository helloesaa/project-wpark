async function routes(fastify, opts) {
    // route untuk frontend
    fastify.get('/api/test-react', async (request, reply) => {
        return { msg: 'React/Electron bisa hit backend!' }
    })
}

module.exports = routes
