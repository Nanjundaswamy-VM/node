/**
 * @file
 * PM2 config file
 */

module.exports = {
  apps: [
    {
      name: "restaurant",
      script: "./dist/server.js",
      watch: true,
      instances: 1,
      exec_mode: "cluster",
      env: {
        PORT: 8083
      }
    }
  ]
}