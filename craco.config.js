const path = require('path')
// const CracoLessPlugin = require('craco-less') // 修改主题色所需
const pathResolve = pathUrl => path.join(__dirname, pathUrl)

module.exports = {
  webpack: {
    alias: {
      '@': pathResolve('src'),
      '@assets': pathResolve('src/assets'),
      '@components': pathResolve('src/components'),
      '@service': pathResolve('src/service'),
      '@pages': pathResolve('src/pages'),
      '@utils': pathResolve('src/utils')
    }
  },
  babel: {
    // plugins: [
    //   ['import', { libraryName: 'antd', style: true }],
    //   ['@babel/plugin-proposal-decorators', { legacy: true }]
    // ]
  },
  plugins: [
    // {
    //   plugin: CracoLessPlugin,
    //   options: {
    //     // 此处根据 less-loader 版本的不同会有不同的配置，详见 less-loader 官方文档
    //     lessLoaderOptions: {
    //       lessOptions: {
    //         modifyVars: {},
    //         javascriptEnabled: true
    //       }
    //     }
    //   }
    // }
  ]
}
