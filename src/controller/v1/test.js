class TestController {
    constructor() {}

    async test(ctx) {
        ctx.body = {
            status: 200,
            message: 'message',
            data: {
                file: 'test.js',
                title: 'webpack 5 构建node应用',
                content: 'koa + @koa/router + require-dirctory'
            }
        }
    }
}

export default new TestController()
