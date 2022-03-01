const express = require("express")

const app = express()

/** 
  cpf - string
  name - string
  id - uuid
  statement []
*/
app.post("/account", (req, res) => {
  const cpf = req.body.cpf
})

app.listen(3333, () => console.log("server running in localhost:3333"))