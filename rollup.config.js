import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import flow from 'rollup-plugin-flow';
import uglify from 'rollup-plugin-uglify';
import postcss from 'rollup-plugin-postcss';
import cssnano from 'cssnano';
import precss from 'precss';
import autoprefixer from 'autoprefixer';
import postcssModules from 'postcss-modules';
import postcssUrl from 'postcss-url';
import postcssImport from 'postcss-import';
import globalImport from 'postcss-global-import';
import url from 'rollup-plugin-url';
import pkg from './package.json';

const cssExportMap = {};
const isProd = process.env.NODE_ENV === 'production';

let postcssPlugins = [
    postcssImport(),
    globalImport(),
    postcssUrl({
        url: 'inline'
    }),
    precss(),
    autoprefixer(),
    postcssModules({
        getJSON(id, exportTokens) {
            cssExportMap[id] = exportTokens;
        },
        generateScopedName: '[name]__[local]___[hash:base64:5]'
    })
];

if (isProd) {
    postcssPlugins = [...postcssPlugins, cssnano()];
}

export default {
    input: 'src/index.js',
    output: {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true
    },
    external: [],
    plugins: [
        postcss({
            plugins: postcssPlugins,
            getExportNamed: false,
            getExport(id) {
                return cssExportMap[id];
            },
            extensions: ['.css'],
            extract: pkg.style
        }),
        flow(),
        nodeResolve({
            jsnext: true,
            main: true,
            browser: true
        }),
        url({
            limit: 1000000
        }),
        babel({
            exclude: 'node_modules/**'
        }),
        commonjs({
            namedExports: {
                'node_modules/react/react.js': ['PropTypes', 'createElement', 'Component', 'PureComponent']
            }
        }),
        isProd && uglify()
    ],
};
