import Koa from 'koa'
import log from 'npmlog'
import initLoadRoutes from './routes/index'

require('module-alias/register')

const app = new Koa()

initLoadRoutes(app)

const port = 3002
app.listen(port, () => log.notice(`服务启动在${port}端口`))
