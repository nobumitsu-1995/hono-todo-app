import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import prisma from './database.js'

const app = new Hono()

app.get('/todos', async (c) => {
  const data = await prisma.todo.findMany()
  return c.json({
    ok: true,
    data
  })
})

app.get('/todos/:id', async (c) => {
  const id = Number(c.req.param('id'))
  const data = await prisma.todo.findFirst({
    where: { id }
  })
  return c.json({
    ok: true,
    data
  })
})

app.patch('/todos/:id', async (c) => {
  const id = Number(c.req.param('id'))
  const body = await c.req.json()
  const data = await prisma.todo.update({
    where: { id },
    data: {
      title: body.title,
    }
  })
  c.status(201)
  return c.json({
    ok: true,
    data
  })
})

app.post('/todos', async (c) => {
  const body = await c.req.json()
  const data = await prisma.todo.create({
    data: {
      title: body.title,
      status: body.status
    }
  })
  c.status(201)
  return c.json({
    ok: true,
    data
  })
})

app.delete('/todos/:id', async (c) => {
  const id = Number(c.req.param('id'))
  await prisma.todo.delete({
    where: { id }
  })
  c.status(204)
  return c.json({
    ok: true
  })
})

const port = 3000
console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port
})
