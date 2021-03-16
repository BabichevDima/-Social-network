const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@redux": path.resolve(__dirname, "src/redux/"),
      "@api": path.resolve(__dirname, "src/api/"),
      "@hoc": path.resolve(__dirname, "src/components/hoc/"),
      "@common": path.resolve(__dirname, "src/components/common/"),
      "@utils": path.resolve(__dirname, "src/utils/"),
      "@assets": path.resolve(__dirname, "src/assets/images/"),
      "@utils": path.resolve(__dirname, "src/utils/"),
    },
  },
};
