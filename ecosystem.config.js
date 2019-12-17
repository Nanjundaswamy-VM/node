/**
 * @file
 * PM2 config file
 */
module.exports = {
    apps : [
      {
      name        : "restaurant",
      script      : "./restaurant/dist/server.js",
      watch       : true,
      instances  : 1,
      exec_mode  : "cluster",
      env: {
        PORT: 8083
      }
    },
    {
      name        : "order",
      script      : "./orders/dist/server.js",
      watch       : true,
      instances  : 1,
      exec_mode  : "cluster",
      env: {
        PORT: 8082
      }
    },
    {
      name        : "report",
      script      : "./report_agg/dist/server.js",
      watch       : true,
      instances  : 1,
      exec_mode  : "cluster",
      env: {
        PORT: 8084
      }
    }
    ]
  }