module.exports = {
    apps: [{
      name: "hamzastar",
      script: "yarn",
      args: "start",
      interpreter: "bash",
      env: {
        PORT: "3000",
        HOST: "0.0.0.0"
      }
    }]
  }
   