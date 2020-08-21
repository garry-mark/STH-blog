const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

const nextConfig = {
    ...withCSS({
        ...withSass({
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
                        resources: ['./theme/var.scss', './theme/mixins.scss'],
                    }
                });
                config.module.rules.push({
                    test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)/,
                    use: {
                        loader: 'url-loader',
                        options: {
                            limit: 100000,
                            esModule: false,    // 解决资源变成 [object Module]问题
                            name: '[name].[ext]'
                        }
                    }
                });
                console.log(config.module.rules)
                return config;
            }
        }),
        cssModules: false, // 解决存css类名被hash问题
    })
}

module.exports = nextConfig;