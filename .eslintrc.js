module.exports = {
    env: {
        es2021: true,
        node: true
    },
    extends: ['airbnb-base', 'plugin:prettier/recommended'],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    },
    rules: {
        'class-methods-use-this': ['off', { exceptMethods: ['constructor'] }], // exceptMethods 传递要忽略其警告的方法名称数组
        'import/no-unresolved': [2, { ignore: ['^@/', '@controller'] }], // @和@controller 是设置的路径别名
        // 'no-useless-constructor': 'off',
        'no-empty-function': ['error', { allow: ['constructors'] }]
    }
}
