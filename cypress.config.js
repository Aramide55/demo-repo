const{defineConfig}= require ("cypress")
module.exports= defineConfig ({
  e2e:{
    "baseUrl":"https://www.amazon.com/",
    "defaultCommandTimeout":90000,
    "pageLoadTimeout":90000,
    "viewportHeight":800,
    "viewportwidth":1500,
  }
});
