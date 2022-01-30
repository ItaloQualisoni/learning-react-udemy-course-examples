const path = require('path');

module.exports = {
    entry:'./src/app.jsx',
    output:{
        path: __dirname,
        filename:'./public/bundle.js'
    },
    resolve:{
        roots:[
            __dirname
        ],
        alias: {
            Greeter: path.resolve(__dirname, 'src/component/Greeter.jsx'),
            GreeterMessage: path.resolve(__dirname, 'src/component/GreeterMessage.jsx'),
            GreeterForm: path.resolve(__dirname, 'src/component/GreeterForm.jsx'),
        },
        extensions: ['','.js','.jsx']
    },
    module:{
        rules:[
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-react","@babel/preset-env"]
                    }                    
                }                
            }
        ]
    }
}