import { Hono } from 'hono'
import { logger } from 'hono/logger'

import routes from './routers'

const app = new Hono()

app.use('*', logger())

app.route('/', routes)

// app.use('*', serveStatic({
//     path: './public/404.html',
// }))

export default app