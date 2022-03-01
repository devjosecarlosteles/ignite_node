const express = require("express")
const uuid = require("uuid")

const app = express()

/** 
  cpf - string
  name - string
  id - uuid
  statement []
*/
app.post("/account", (req, res) => {
  const { cpf, name } = req.body
})

app.listen(3333, () => console.log("server running in localhost:3333"))