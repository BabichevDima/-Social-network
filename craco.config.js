const path = require("path");
module.exports = {
  webpack: {
    alias: {
      '@redux': path.resolve(__dirname, "src/redux/"),
      '@api': path.resolve(__dirname, "src/api/"),
      '@hoc': path.resolve(__dirname, "src/components/hoc/")
    }
  }
}