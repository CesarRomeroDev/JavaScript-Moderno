const HtmlWebPack = require('html-webpack-plugin');
 
module.exports = {
    mode: 'development',
 
    output: {
        clean: true
    },
 
    module: {
        rules: [{
 
            test: /\.html$/,
            loader: 'html-loader',
            options: {
                sources: false
            }
        }]
    },
    plugins: [
       new HtmlWebPack({
        title: 'Mi Webpack App',
        template: './src/index.html',
       })
    ]
}
