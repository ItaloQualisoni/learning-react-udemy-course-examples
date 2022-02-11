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
                        presets: ["@babel/preset-env","@babel/preset-react"]
                    }                    
                }                
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            
        ]
    }
}