module.exports = {
    ignore: [
        '../../src/components/**/[A-Z]*.story.js',
        '../../src/components/**/__tests__/*'
    ],
    components: '../../src/components/**/[A-Z]*.js',
    webpackConfig: require('../webpack/webpack.config.babel.js'),
};
