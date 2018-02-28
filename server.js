const express = require('express')
const server  = new express()

server.use(express.static(`${__dirname}/build`))

server.listen(3000, function(){
  console.log(`Server is listening on port: 3000`);
})
