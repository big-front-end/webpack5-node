import Router from '@koa/router'
import DemoController from '@controller/demo/'

const router = new Router({ prefix: '/api/v1' })

router.get('/demo', DemoController.demo)

export default router
