const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@imgs': path.resolve(__dirname, 'src/assets/imgs/'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};
