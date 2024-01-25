/*** IMPORT */
const app = require('./app/api')

/*** START Server */
app.listen(process.env.SERVER_PORT, () => {
    console.log(`This server running on port ${process.env.SERVER_PORT}`)
})
