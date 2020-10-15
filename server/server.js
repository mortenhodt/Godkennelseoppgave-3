const express = require("express")
const app = express()
const port = 3000


const login = require("../Controller/logincont")
const protect = require("../Controller/protectcont")
const user = require("../Controller/usercont")


server.get("/users", user)

server.get("/protect", protect)


server.post("/login", login)


server.listen(port, () => {
    console.log('Server-app answers to http://localhost:${port}')
  })
  
  
