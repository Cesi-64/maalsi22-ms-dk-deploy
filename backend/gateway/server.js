/*** IMPORT MODULE */
const express = require('express')
const cors = require('cors')
const { createProxyMiddleware } = require('http-proxy-middleware')

/*** PARAM GATEWAY */

const app = express()

app.use(cors())

/*** PARAM GATEWAY */
const proxyAuth = createProxyMiddleware({
  target: process.env.SRV_AUTH+':'+process.env.SRV_AP,
  pathRewrite: { '^/apiv1/auth': '/auth/login' }
})
const proxyData = createProxyMiddleware({
  target: process.env.SRV_DATA+':'+process.env.SRV_DP,
  pathRewrite: { '^/apiv1/data': '' }
})
const proxyMail = createProxyMiddleware({
  target: process.env.SRV_MAIL+':'+process.env.SRV_MP,
  pathRewrite: { '^/apiv1/mail': '/mail' }
})

/**************************************/
/*** Middleware de log pour le router */
app.use( (req, res, next) => {
  res.once('finish', () => {
      const event = new Date()
      console.log(`[${req.method}] [${req.originalUrl}] [${res.statusCode}] -- `, event.toLocaleString())
  })
  
  next()
})

/*** ROUTAGE */
app.get('/', (req, res) => res.send('JOIE GAITE BONHEUR'))

app.use('/apiv1', proxyAuth)
app.use('/apiv2/data', proxyData)
app.use('/apiv3/mail', proxyMail)

app.all('*', (req, res) => res.status(501).send('MAIS BIEN SUR MON GROS MALIN.'))

/*** START GATEWAY */
app.listen(12000, () => {
    console.log('GATEWAY OK sur le port 12000')
})