/*** IMPORT */
const app = require('./app/api')
const DB = require('./app/db.config')

/*** START Server */
DB.sequelize.authenticate()
    .then(() => console.log(`Database connection OK`))
    .then(() => {
        app.listen(process.env.SERVER_PORT, () => {
            console.log(`This server running on port ${process.env.SERVER_PORT}`)
        })
    })
    .catch(e => console.log(e))