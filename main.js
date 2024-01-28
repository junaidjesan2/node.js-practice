const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about',(req,res)=>{
res.status(404).end("Page not found...")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})