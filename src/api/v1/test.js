import Router from '@koa/router'
import TestController from '@controller/test'

const router = new Router({ prefix: '/api/v1' })

router.get('/test', TestController.test)

export default router
