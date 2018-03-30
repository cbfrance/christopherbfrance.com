module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: ['prettier', 'prettier/react'],
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true,
        },
        sourceType: 'module',
    },
    plugins: ['react'],
}
