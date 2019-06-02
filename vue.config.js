module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  publicPath: process.env.NODE_ENV === 'production'
      ? '/reserve-1on1/dist/'
      : '/'
}
