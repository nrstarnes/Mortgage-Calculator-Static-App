module.exports = {
    entry: [
        './src/pages/MortgageCalculator'
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'MortgageCalculator.js',
        library: 'mortgage-calculator-react',
        libraryTarget: 'umd',
        umdNamedDefine: true
    }
};