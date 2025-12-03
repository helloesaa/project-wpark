module.exports = async function (fastify, opts) {
    // route untuk frontend
    fastify.get('/api/test-react', async () => {
        return { msg: 'React/Electron bisa hit backend!' };
    });

};
