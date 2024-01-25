/*** IMPORT MODULE */
const express = require('express')
const cors = require('cors')
const { createProxyMiddleware } = require('http-proxy-middleware')

/*** PARAM GATEWAY */

const app = express()

app.use(cors())

/*** PARAM GATEWAY */
const options = {
    target: 'http://flp-api.francecentral.cloudapp.azure.com', // target host
    //changeOrigin: true, // needed for virtual hosted sites
    //ws: true, // proxy websockets
    pathRewrite: {
      '^/api/marcel': '/users', // rewrite path
      '^/api/roger': '/cocktails', // remove base path
    }
  }
const proxy = createProxyMiddleware(options);

/*** ROUTAGE */
app.get('/', (req, res) => res.send('JOIE GAITE BONHEUR'))

// app.use('/marcel', createProxyMiddleware({
//     target: 'http://flp-api.francecentral.cloudapp.azure.com',
//     pathRewrite: {
//         '^/marcel': '/users'
//     }
// }))

app.use('/api', proxy)

app.all('*', (req, res) => res.status(501).send('MAIS BIEN SUR MON GROS MALIN'))

/*** START GATEWAY */
app.listen(12000, () => {
    console.log('GATEWAY OK sur le port 12000')
})