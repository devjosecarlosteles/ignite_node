const express = require("express")
const { v4: uuidv4 } = require("uuid")

const app = express()

app.use(express.json())

const customers = []

/** 
  cpf - string
  name - string
  id - uuid
  statement []
*/
app.post("/account", (req, res) => {
  const { cpf, name } = req.body

  const customerAlreadyExists = customers.some((customer) => customer.cpf === cpf)

  if(customerAlreadyExists) return res.status(400).json({ err: "Customer Already exists " })

  const id = uuidv4()

  costumers.push({
    cpf,
    name,
    id,
    statement: []
  })

  return res.status(201).send()
})

app.listen(3333, () => console.log("server running in localhost:3333"))