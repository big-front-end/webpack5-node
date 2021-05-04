import Router from '@koa/router'
import requireDirectory from 'require-directory'

const apiDirectory = `${process.cwd()}/src/api`

function initLoadRoutes(app) {
    requireDirectory(module, apiDirectory, {
        visit({ default: router }) {
            if (router instanceof Router) {
                app.use(router.routes())
            }
        }
    })
}

export default initLoadRoutes
