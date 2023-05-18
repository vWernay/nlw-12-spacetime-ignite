import 'dotenv/config'

import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import { memoriesRoutes } from './routes/memories'
import { authRotes } from './routes/auth'

const app = fastify()

app.register(cors, {
  origin: true,
})

app.register(jwt, {
  secret: '43766b67d79d3e167f89a2cf6d0465a2', // 16 bytes (128 bits)
})

app.register(authRotes)
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 HTTP server running on http://localhost:3333')
  })
