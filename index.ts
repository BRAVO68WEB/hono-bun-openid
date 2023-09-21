import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'

import routes from './routers'

const app = new Hono()

app.use('*', logger())

app.route('/', routes)

app.use('*', serveStatic({
    path: './public/404.html',
}))

serve({
    fetch: app.fetch,
    port: Number(process.env.PORT),
})