'use strict'

const server = require('./src/server')
server.start(process.env.PORT || 5000)