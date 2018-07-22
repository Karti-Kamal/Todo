// webpack.config.js
let Encore = require('@symfony/webpack-encore');

let scriptsLimitless = [

    './web/assets/js/plugins/loaders/pace.min.js',
    './web/assets/js/core/libraries/jquery.min.js',
    './web/assets/js/core/libraries/bootstrap.min.js',
    './web/assets/js/plugins/loaders/blockui.min.js',
    './web/assets/js/plugins/ui/nicescroll.min.js',
    './web/assets/js/plugins/ui/drilldown.js',
];

let stylesLimitless = [
    './web/assets/css/icons/icomoon/styles.css',
    './web/assets/css/bootstrap.css',
    './web/assets/css/core.css',
    './web/assets/css/components.css',
    './web/assets/css/colors.css',
];
Encore
// the project directory where all compiled assets will be stored
    .setOutputPath('web/build/')

    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')

    // will create web/build/app.js and web/build/app.css
    .addEntry('js/admin', scriptsLimitless)
    .addEntry('js/login', [ './web/assets/js/plugins/forms/styling/uniform.min.js', './web/assets/js/core/app.js', './web/assets/js/pages/login.js',])

    .addEntry('js/pages/index', './front-app/index.js')

    .addStyleEntry('css/admin', stylesLimitless)

    // allow legacy applications to use $/jQuery as a global variable
    .autoProvidejQuery()

    // enable source maps during development
    .enableSourceMaps(!Encore.isProduction())

    // empty the outputPath dir before each build
    .cleanupOutputBeforeBuild()

    // show OS notifications when builds finish/fail
    .enableBuildNotifications()

// create hashed filenames (e.g. app.abc123.css)
// .enableVersioning()

// allow sass/scss files to be processed
// .enableSassLoader()

    .enableReactPreset()
;

// export the final configuration
module.exports = Encore.getWebpackConfig();