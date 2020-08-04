const withSass = require('@zeit/next-sass');
module.exports = withSass({
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]__[hash:base64:5]",
    },
    webpack: (config) => {
        config.module.rules.push({
            enforce: 'pre',
            test: /.scss$/,
            loader: 'sass-resources-loader',
            options: {
                resources: ['./theme/var.scss','./theme/mixins.scss'],
            }
        });

        return config;
    }
});
