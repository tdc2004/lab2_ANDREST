const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Trang home')
  })

app.get('/chitiet', (req, res) => {
  res.send('Trang chi tiết sản phẩm')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})